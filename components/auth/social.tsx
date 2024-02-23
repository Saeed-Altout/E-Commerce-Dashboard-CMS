"use client";

import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import { Button } from "@/components/ui/button";

export const Social = () => {
  return (
    <div className="flex justify-between items-center w-full gap-x-2">
      <Button size="lg" className="w-full" variant="outline" onClick={() => {}}>
        <FaGithub className="h-6 w-6" />
        <span className="sr-only">GitHub</span>
      </Button>
      <Button size="lg" className="w-full" variant="outline" onClick={() => {}}>
        <FcGoogle className="h-6 w-6" />
        <span className="sr-only">Google</span>
      </Button>
    </div>
  );
};
