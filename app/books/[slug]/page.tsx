// app/books/[slug]/page.tsx
import BookClient from "@/components/books/book-client";
import { notFound } from "next/navigation";

interface BookPageProps {
  params: { slug: string };
}

export default async function BookPage({ params }: BookPageProps) {
  // ⚡ params est async, donc await
  const { slug } = await params;

  if (!slug) {
    notFound();
  }

  // On envoie le slug au Client Component
  return <BookClient slug={slug} />;
}
