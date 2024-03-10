import { db } from "@/lib/db";
import { currentUser } from "@/lib/auth";
import { redirect } from "next/navigation";
import { BillboardClient } from "./components/client";

interface BillboardsPageProps {
  params: {
    storeId: string;
  };
}

export default async function BillboardsPage({ params }: BillboardsPageProps) {
  const user = await currentUser();

  if (!user?.id) {
    redirect("/auth/login");
  }
  const billboards = await db.billboard.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardClient data={billboards} />
      </div>
    </div>
  );
}
