import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
export default async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { storeId: string };
}) {
  const user = await currentUser();
  if (!user) {
    redirect("/auth/login");
  }

  const store = await db.store.findFirst({
    where: {
      id: params.storeId,
      userId: user.id,
    },
  });

  if (!store) {
    redirect("/");
  }

  return (
    <>
      <div>Navbar</div>
      {children}
    </>
  );
}
