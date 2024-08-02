import { Outlet } from "react-router-dom";

const ErrorLayout: React.FC = () => {
  return (
    <div className="lg:w-[1000px] w-[90%] border-2 my-20 mx-auto border-purple-400 overflow-hidden rounded-lg backdrop-blur-md">
      <div className="absolute bg-[url('./assets/mic.jpg')] w-full h-screen bg-no-repeat md:bg-cover bg-none opacity-20"></div>
      {<Outlet />}
    </div>
  );
};

export default ErrorLayout;
