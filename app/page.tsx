import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import React from "react";

export default function Home() {
  return (
    <div className="h-full w-full bg-gradient-to-br from-purple-800 to-blue-700 flex justify-center items-center">
      <div className="space-y-5 flex flex-col items-center justify-center">
        <h1 className="text-white text-center text-5xl font-semibold drop-shadow-2xl">
          Auth 🔐
        </h1>
        <p className="text-center text-white text-lg">
          A simple authentication service.
        </p>
        <LoginButton>
          <Button variant="secondary" size="lg">
            Sign in
          </Button>
        </LoginButton>
      </div>
    </div>
  );
}
