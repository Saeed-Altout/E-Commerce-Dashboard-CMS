import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await currentUser();
  if (!user) {
    redirect("/auth/login");
  }
  const store = await db.store.findFirst({
    where: { userId: user.id },
  });

  if (store) {
    redirect(`/${store.id}`);
  }

  return <>{children}</>;
}
