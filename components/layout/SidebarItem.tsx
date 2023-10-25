"use client"
import { useLoginModal } from "@/hooks/useLoginModal";
import { useRouter } from "next/navigation";
import { IconType } from "react-icons";

type SidebarItemProps = {
  label: string;
  icon: IconType;
  href?: string;
  onClick?: () => void;
  auth?: boolean
  currentUser?: any
};

const SidebarItem = ({
  label,
  icon: Icon,
  href,
  onClick,
  auth,
  currentUser
}: SidebarItemProps) => {
  const router = useRouter()

  const loginModal = useLoginModal()

  const handleClick = () => {
    if (onClick) {
      return onClick();
    }
    
   if(auth && !currentUser) {
    loginModal.onOpen()
   } else if (href) {
    router.push(href)
   }
  };

  return (
    <div onClick={handleClick}  className="flex flex-row items-center">
      {/* Mobile View */}
      <div className="relative rounded-full h-14 w-14 flex items-center justify-center p-4 hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer lg:hidden">
        <Icon size={28} color="white" />
      </div>
      {/* Desktop View */}
      <div className="relative hidden lg:flex items-center gap-4 p-4 rounded-full hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer">
        <Icon size={28} color="white" />
        <p className="hidden lg:block text-white text-xl">{label}</p>
      </div>
    </div>
  );
};

export default SidebarItem;
