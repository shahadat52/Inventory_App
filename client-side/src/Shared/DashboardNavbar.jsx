
import { AiOutlineMenuFold } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const DashboardNavbar = () => {

    const menuItems = <>
        <li><NavLink to="#"
            className={({ isActive }) =>
                isActive
                    ? "bg-blue-500 text-white p-2 rounded "
                    : "  text-white "
            }
        >Registration</NavLink></li>
        <li><NavLink to="#"
            className={({ isActive }) =>
                isActive
                    ? "bg-blue-500 text-white p-2 rounded "
                    : "  text-white "
            }
        >Login</NavLink></li>
        <li><NavLink to="#"

            className=" text-white p-2 rounded "
        >Sign Out</NavLink>
        </li>
    </>

    return (
        <section className="px-10 shadow-lg">
            <div className="navbar ">
                <div className="navbar-start">
                    <NavLink
                        to="/dashboard"
                        className="text-2xl font-bold text-primary"
                    >StockSage</NavLink>
                </div>
                <div className="navbar-center">
                    <p className="font-bold text-2xl text-primary">Dashboard</p>
                </div>

                <div className="navbar-end">

                    <label htmlFor="drawerToggler" className="text-black lg:hidden "><AiOutlineMenuFold /></label>

                </div>
            </div>
        </section>
    );
};

export default DashboardNavbar;