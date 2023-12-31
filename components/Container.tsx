import getCurrentUser from "@/actions/getCurrentUser";
import FollowBar from "./layout/FollowBar";
import Sidebar from "./layout/Sidebar";
import getUsers from "@/actions/getUsers";

type ContainerProps = {
  children: React.ReactNode;
};

const Container = async ({ children }: ContainerProps) => {
  const currentUser = await getCurrentUser()
  const users = await getUsers()

  return (
    <div className="h-screen bg-black">
      <div className="container h-full mx-auto max-w-6xl">
        <div className="grid grid-cols-4 h-full">
            <Sidebar currentUser={currentUser} />
          <div className="col-span-3 lg:col-span-2 border-x-[1px] border-neutral-800">
            {children}
          </div>
          <FollowBar users={users}  />
        </div>
      </div>
    </div>
  );
};

export default Container;
