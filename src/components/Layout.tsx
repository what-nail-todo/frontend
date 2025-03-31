import SideNav from "./SideNav";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="flex">
            <SideNav />
            <div className="pl-[250px] w-full h-full">
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
