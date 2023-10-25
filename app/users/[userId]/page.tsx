import getCurrentUser from "@/actions/getCurrentUser"
import Header from "@/components/Header"
import UserBio from "@/components/users/UserBio"
import UserHero from "@/components/users/UserHero"
import prisma from "@/libs/prismadb"
import { ClipLoader } from "react-spinners"

const UserView = async ({params}: {params: { userId: string }}) => {
  
  const user = await prisma.user.findUnique({
    where: {
      id: params.userId
    }
  }) 

  const currentUser = await getCurrentUser()

  if(!user) {
    return (
        <div className="flex justify-center items-center h-full" >
            <ClipLoader color="lightblue" size={80} />
        </div>
    )
  }

  return (
    <>
        <Header label={user.name} showBackArrow />
        <UserHero user={user} />
        <UserBio user={user} currentUser={currentUser} />
    </>
  )
}

export default UserView