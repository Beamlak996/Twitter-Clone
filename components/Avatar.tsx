"use client"

import { useRouter } from "next/navigation"
import Image  from "next/image"

type AvatarProps = {
    userId: string
    isLarge?: boolean
    hasBorder?: boolean
    profileImage?: string
}

const Avatar = ({
    userId,
    isLarge,
    hasBorder,
    profileImage,
}: AvatarProps) => {

  const router = useRouter()
  const onClick = (e: any)=> {
    e.stopPropagation()
    const url = `/users/${userId}`
    router.push(url)
  }

  return (
    <div className={`${hasBorder ? "border-4 border-black" : ""} ${isLarge ? "h-32 w-32" : "h-12 w-12"} rounded-full hover:opacity-90 transiton cursor-pointer relative`} >
      <Image alt="" src={profileImage || "/images/placeholder.png"} fill style={{objectFit: "cover"}} className="rounded-full" onClick={onClick} />
    </div>
  )
}

export default Avatar