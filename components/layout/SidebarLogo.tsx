"use client"
import { useRouter } from "next/navigation"

const SidebarLogo = () => {
  const router = useRouter()

  return (
    <div className="rounded-full h-14 w-14 p-4 flex items-center justify-center hover:bg-blue-300" >

    </div>
  )
}

export default SidebarLogo