import { Outlet } from "react-router-dom";
import { Footer } from "../components/layout/footer";

const MainLayout: React.FC = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div>
        <h1 className="text-purple-200 text-center mt-10 font-black text-5xl">Speak, and It Happens!</h1>
        <div className="lg:w-[1000px] w-[80%] border-2 my-36 mx-auto border-blue-400 rounded-lg backdrop-blur-md">
          {<Outlet />}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
