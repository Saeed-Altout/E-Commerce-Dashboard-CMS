"use client";

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

import { useStoreModal } from "@/hooks/use-store-modal";
import { useEffect } from "react";

export default function SetupPage() {
  const session = useSession();
  const router = useRouter();

  const isOpen = useStoreModal((state) => state.isOpen);
  const onOpen = useStoreModal((state) => state.onOpen);

  if (!session.data) {
    router.push("/auth/login");
  }

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return null;
}
