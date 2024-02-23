"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

interface BackButtonProps {
  label: string;
  href: string;
}
export const BackButton: React.FC<BackButtonProps> = ({ label, href }) => {
  return (
    <Button
      size="sm"
      className="w-full"
      variant="link"
      asChild
      onClick={() => {}}
    >
      <Link href={href}>{label}</Link>
    </Button>
  );
};
