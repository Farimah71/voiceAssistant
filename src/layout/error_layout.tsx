import { Outlet } from "react-router-dom";
import bgImg from "../assets/mic.jpg";

const ErrorLayout: React.FC = () => {
  // ********** JSX ***********
  return (
    <div className="lg:w-[1000px] w-[90%] border-2 my-20 mx-auto border-purple-400 overflow-hidden rounded-lg backdrop-blur-md">
      <img
        src={bgImg}
        alt="mic"
        className="absolute w-full h-full bg-no-repeat md:bg-cover bg-none opacity-20"
      />
      {<Outlet />}
    </div>
  );
};

export default ErrorLayout;
