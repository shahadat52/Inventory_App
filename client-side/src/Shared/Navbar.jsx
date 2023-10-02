import { NavLink } from "react-router-dom";

const Navbar = () => {
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
    </>

    return (
        <section className="bg-primary px-10">
            <div className="navbar bg-primary">
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