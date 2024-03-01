import { db } from "@/lib/db";

interface DashboradPageProps {
  params: { storeId: string };
}

export default async function DashboradPage({ params }: DashboradPageProps) {
  const store = await db.store.findFirst({
    where: {
      id: params.storeId,
    },
  });

  return <div>Active store: {store.name}</div>;
}
