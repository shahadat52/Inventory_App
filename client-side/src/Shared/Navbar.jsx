import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err);
            })
    }
    const menuItems = <>
            <li><NavLink to="/registration"
                className={({ isActive }) =>
                    isActive
                        ? "bg-blue-500 text-white p-2 rounded "
                        : "  text-white "
                }
            >Registration</NavLink></li>
        <li><NavLink to="/login"
            className={({ isActive }) =>
                isActive
                    ? "bg-blue-500 text-white p-2 rounded "
                    : "  text-white "
            }
        >Login</NavLink></li>

        {
            user && <li><NavLink to="#"
                onClick={handleLogOut}
                className=" text-white p-2 rounded "
            >Sign Out</NavLink>
            </li>
        }
    </>

    return (
        <section className="bg-primary   px-10">
            <div className="navbar shadow-lg bg-primary">
                <div className="navbar-start">
                    <NavLink to="/" className="text-2xl font-bold text-white">StockSage</NavLink>
                </div>

                <div className="navbar-end">
                    <ul className="flex flex-row gap-5">
                        {menuItems}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Navbar;