import { Outlet } from "react-router-dom";
import { Footer } from "../components/layout/footer";

const MainLayout: React.FC = () => {
  return (
    <>
      <div className="lg:w-[1000px] w-[80%] border-2 md:my-50 my-52 mx-auto border-blue-400 rounded-lg backdrop-blur-md">
        {<Outlet />}
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
