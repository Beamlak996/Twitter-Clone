import prisma from "@/libs/prismadb";

const getUser = async (userId: string) => {
  try {
    const users = await prisma.user.findUnique({
      where: {
        id: userId
      }
    });

    return users;
  } catch (error: any) {
    return [];
  }
};

export default getUser;
