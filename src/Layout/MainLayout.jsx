import { Outlet } from "react-router-dom";
import Navbar from "../Page/Home/Navbar";
import Footer from "../Page/Home/Footer";

const MainLayout = () => {
  return (
    <div>
      <div className=" bg-base-200 shadow-xl">
        <Navbar />
      </div>
      <div className="min-h-[calc(100vh-70px)]">
        <Outlet />
      </div>
      <div className="bg-neutral text-neutral-content">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
