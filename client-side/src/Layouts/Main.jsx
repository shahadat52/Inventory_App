import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const Main = () => {
    return (
        <>
           <div className="">
           <Navbar />
           </div>
            <Outlet />
            <Footer />
        </>
    );
};

export default Main;