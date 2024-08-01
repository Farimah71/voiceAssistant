import { Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
  return (
    <div className="w-[1000px] h-[600px] border-2 mt-44 mx-auto border-blue-400 rounded-lg backdrop-blur-md">
      {<Outlet />}
    </div>
  );
};

export default MainLayout;
