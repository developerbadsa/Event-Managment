import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";


const MainLayout = () => {
      return (
            <div className="bg-slate-800">
                  <Outlet></Outlet>
            </div>
      );
};

export default MainLayout;