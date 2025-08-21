"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import Loader from "@/components/loader";

export default function OnboardingPage() {
  const { user, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && user) {
      // Redirect to dashboard after a brief delay to show loading state
      const timer = setTimeout(() => {
        router.push("/dashboard");
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isLoaded, user, router]);

  if (!isLoaded) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
        <Loader />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <Loader />
        <h1 className="text-2xl font-bold mt-4">Welcome to Neo Wealth!</h1>
        <p className="text-gray-400 mt-2">Setting up your account...</p>
      </div>
    </div>
  );
}
