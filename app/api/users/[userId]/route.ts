import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { userId: string } }
) {
  try {
    if (params.userId) {
        return new NextResponse("User id is required", {status: 400})
    }

    const existingUser = await prisma.user.findUnique({
        where: {
            id: params.userId
        }
    })

    const followersCount = await prisma.user.count({
        where: {
            followindgIds: {
                has: params.userId
            }
        }
    })

    return NextResponse.json({ existingUser, followersCount })
  } catch (error) {
    console.log()
    return new NextResponse("Internal Server", { status: 500 })
  }
}
