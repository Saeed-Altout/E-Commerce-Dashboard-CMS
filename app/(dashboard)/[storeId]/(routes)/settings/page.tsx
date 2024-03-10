import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { SettingsForm } from "./components/settings-form";

interface SettingsPageProps {
  params: {
    storeId: string;
  };
}
export default async function SettingsPage({ params }: SettingsPageProps) {
  const user = await currentUser();

  if (!user?.id) {
    redirect("/auth/login");
  }

  const store = await db.store.findFirst({
    where: {
      id: params.storeId,
      userId: user?.id,
    },
  });

  if (!store) {
    redirect("/auth/login");
  }

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SettingsForm initialData={store} />
      </div>
    </div>
  );
}
