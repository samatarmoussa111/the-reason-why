import SuccessClient from "@/components/books/success-client";

export default function Page({
  searchParams,
}: {
  searchParams: { session_id?: string };
}) {
  return <SuccessClient sessionId={searchParams.session_id} />;
}
