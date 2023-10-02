import { Link } from "react-router-dom";
import banner from '../../assets/banner.jpg';

const Home = () => {
    return (
        <section className="bg-primary min-h-[91vh] ">
            <div className="grid grid-cols-2 justify-center py-20 items-center gap-5">
                {/* banner text section */}
                <div className="text-start">
                    <h2 className="text-5xl font-bold">Inventory and stock management <br /> system</h2>
                    <p >Inventory system to control and manage products in the warehouse in real time and integrated to make it easier to develope your business</p>
                    <p>
                        <Link to="#" className="border-2 p-2 text-black">Free Trial 1 month</Link>
                    </p>
                    <div className="flex">
                        <div>
                            <h3>14k</h3>
                            <p>Brands Owner</p>
                        </div>
                        <div>
                            <h3>14k</h3>
                            <p>Brands Owner</p>
                        </div>
                        <div>
                            <h3>14k</h3>
                            <p>Brands Owner</p>
                        </div>
                    </div>
                </div>
                {/* banner image section */}
                <div>
                    <img
                        className="w-[75%] justify-center items-center"
                        src={banner} alt="stock_image" />
                </div>
            </div>
        </section>
    );
};

export default Home;