import SuccessClient from "@/components/books/success-client";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const params = await searchParams;

  return <SuccessClient sessionId={params.session_id} />;
}
