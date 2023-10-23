import FollowBar from "./layout/FollowBar";
import Sidebar from "./layout/Sidebar";

type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="h-screen bg-black">
      <div className="container h-full mx-auto max-w-6xl">
        <div className="grid grid-cols-4 h-full">
            <Sidebar />
          <div className="col-span-3 lg:col-span-2 border-x-[1px] border-neutral-800">
            {children}
          </div>
          <FollowBar  />
        </div>
      </div>
    </div>
  );
};

export default Container;
