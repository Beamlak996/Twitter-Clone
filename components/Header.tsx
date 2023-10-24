"use client"
import { useRouter } from "next/navigation"
import { BiArrowBack } from "react-icons/bi"

type HeaderProps = {
    label: string
    showBackArrow?: boolean
}

const Header = ({label, showBackArrow}: HeaderProps) => {
  const router = useRouter()

  const handleBack = ()=> {
    router.back()
  }

  return (
    <div className="border-b-[1px] border-neutral-800 p-5" >
        <div className="flex items-center gap-2" >
            {
                showBackArrow && (
                    <BiArrowBack onClick={handleBack} color="white" className="cursor-pointer hover:opacity-70" />
                )
            }
            <h1 className="text-white text-xl font-semibold" >
              {label}
            </h1>
        </div>
    </div>
  )
}

export default Header