import Image from "next/image"
import Avatar from "../Avatar"

type UserHeroProps = {
    user: any
}

const UserHero = ({user}: UserHeroProps) => {
  return (
    <div>
        <div className="bg-neutral-700 h-44 relative" >
            {
                user?.coverImage && (
                    <Image src={user.coverImage} alt="" fill className="object-cover " />
                )
            }
            <div className="absolute -bottom-16 left-4" >
                <Avatar userId={user.id} isLarge hasBorder profileImage={user.profileImage}  />
            </div>
        </div>
    </div>
  )
}

export default UserHero