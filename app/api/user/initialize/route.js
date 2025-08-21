import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/prisma";

export async function POST(request) {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { clerkUserId, name, imageUrl, email } = body;

    // Check if user already exists
    const existingUser = await db.user.findUnique({
      where: {
        clerkUserId: clerkUserId,
      },
    });

    if (existingUser) {
      return NextResponse.json({ user: existingUser });
    }

    // Create new user
    const newUser = await db.user.create({
      data: {
        clerkUserId: clerkUserId,
        name,
        imageUrl,
        email,
      },
    });

    return NextResponse.json({ user: newUser });
  } catch (error) {
    console.error("Error initializing user:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
