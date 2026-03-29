import { action, internalAction } from "./_generated/server";
import { v } from "convex/values";
import Stripe from "stripe";
import { Id } from "./_generated/dataModel";
import { api } from "./_generated/api";

export const pay = action({
  args: { bookId: v.id("books"), price: v.string() },
  handler: async (ctx, args) => {
    const stripe = new Stripe(process.env.NEXT_STRIPE_SECRET_KEY!, {
      apiVersion: "2026-02-25.clover",
    });
    const domain = process.env.NEXT_PUBLIC_URL!;
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price: args.price, quantity: 1 }],
      success_url: `${process.env.NEXT_PUBLIC_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${domain}/books`,
      metadata: { bookId: args.bookId },
    });

    return session.url;
  },
});

type Metadata = {
  bookId: Id<"books">;
};

export const fulfill = internalAction({
  args: {
    signature: v.string(),
    payload: v.string(),
  },
  handler: async (ctx, args) => {
    const stripe = new Stripe(process.env.NEXT_STRIPE_SECRET_KEY!, {
      apiVersion: "2026-02-25.clover",
    });
    const webhookSecret = process.env.NEXT_STRIPE_WEBHOOK_SECRET!;
    try {
      const event = await stripe.webhooks.constructEventAsync(
        args.payload,
        args.signature,
        webhookSecret,
      );
      const completedEvent = event.data.object as Stripe.Checkout.Session & {
        metadata: Metadata;
      };

      // ✅ Si le paiement est réussi
      if (event.type === "checkout.session.completed") {
        const email = completedEvent.customer_details!.email!;
        const bookId = completedEvent.metadata.bookId;
        const sessionId = completedEvent.id;
        if (!email || !bookId) {
          throw new Error("Missing bookId or email in metadata");
        }
        // Appel de la mutation pour créer l'achat
        await ctx.runMutation(api.purchases.createPurchase, {
          email,
          bookId,
          sessionId,
          ispaid: true,
        });
      }
    } catch (error) {
      console.error("Error processing webhook:", error);
    }

    return new Response(" Webhook received", { status: 200 });
  },
});
