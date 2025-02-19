import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const homepage = await prisma.homepage.findFirst();
    if (homepage) {
      return new Response(JSON.stringify(homepage), { status: 200 });
    }
    return new Response(JSON.stringify({ message: "Homepage not found" }), {
      status: 404,
    });
  } catch (error) {
    console.error("Error fetching homepage:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
}

export async function POST(req: NextRequest) {
  const { title, description } = await req.json();

  if (!title || !description) {
    return new Response(
      JSON.stringify({ error: "Title and description are required" }),
      { status: 400 }
    );
  }

  try {
    const homepage = await prisma.homepage.create({
      data: {
        title,
        description,
      },
    });
    return new Response(JSON.stringify(homepage), { status: 201 });
  } catch (error) {
    console.error("Error creating homepage:", error);
    return new Response(
      JSON.stringify({ error: "Failed to create homepage" }),
      { status: 500 }
    );
  }
}
