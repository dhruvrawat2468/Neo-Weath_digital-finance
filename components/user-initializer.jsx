"use client";

import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";

export default function UserInitializer() {
  const { user, isLoaded } = useUser();

  useEffect(() => {
    if (isLoaded && user) {
      // Initialize user in database
      const initializeUser = async () => {
        try {
          await fetch("/api/user/initialize", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              clerkUserId: user.id,
              name: `${user.firstName} ${user.lastName}`,
              imageUrl: user.imageUrl,
              email: user.emailAddresses[0]?.emailAddress,
            }),
          });
        } catch (error) {
          console.error("Error initializing user:", error);
        }
      };

      initializeUser();
    }
  }, [isLoaded, user]);

  return null; // This component doesn't render anything
}
