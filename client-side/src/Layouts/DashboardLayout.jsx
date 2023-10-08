import { Link, NavLink, Outlet } from "react-router-dom";
import DashboardNavbar from "../Shared/DashboardNavbar";

const DashboardLayout = () => {
    return (
        <div className="text-black">
            <DashboardNavbar />
            <div className="drawer lg:drawer-open">
                <input id="drawerToggler" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    {/* Page content here */}
                    <Outlet />

                </div>
                <div className="drawer-side">
                    <label htmlFor="drawerToggler" aria-label="close sidebar" className="  drawer-overlay !bg-transparent "></label>
                    <ul className="menu p-4  w-64 min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li><Link className={({ isActive }) =>
                            isActive
                                ? "bg-red-500 text-white p-2 rounded "
                                : "  text-white "
                        } to="/dashboard">Home</Link></li>

                        <li><Link to="/dashboard/categories">Categories</Link></li>
                        <li><Link to="/">Back to Home</Link></li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;