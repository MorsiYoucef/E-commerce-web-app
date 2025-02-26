import { Link } from "react-router-dom";
import { FaLinkedinIn,FaGithub,FaInstagram,FaPhoneAlt } from "react-icons/fa";
import { FaMeta,FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className=" border-t border-gray-300">
            <div className="container mx-auto px-6 py-12">
                {/* Grid for Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Description */}
                    <div className="mb-8 mr-10 flex flex-col gap-4 md:mb-0">
                        <div>
                            <Link to="/" className=' zorina text-2xl font-medium'>Zorina</Link>
                        </div>
                        <p className="text-gray-400">
                            Be the first to hear about new products, exclusive events, and online offers.
                        </p>

                        <b>
                            <p> Sign up and get 10% off your first order</p>
                        </b>
                        <form className=" flex">
                            <input type="email" placeholder="Enter your email" className=" p-3 w-full text-sm border-t border-l border-b border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all" />
                            <button type="submit" className=" bg-black text-white px-6 py-3 text-sm rounded-r-md hover:bg-gray-800 transition-all cursor-pointer">
                                subscribe
                            </button>
                        </form>
                    </div>

                    {/* Solutions */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Shop</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-gray-500">Men's Top Wear</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-gray-500">Women's Top Wear</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-gray-500">Men's Bottom Wear</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-gray-500">Women's Bottom Wear</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Support</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-gray-500"> Contact Us</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-gray-500">About Us</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-gray-500">FAQs</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-gray-500">Features</a></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <ul className="space-y-2">
                            <li>
                                <div className=" flex gap-4">
                                    <a href="#"><FaMeta /></a>
                                    <a href="#"><FaInstagram /></a>
                                    <a href="#"><FaXTwitter /></a>
                                </div>
                            </li>
                            <li className=" mt-10">
                                <b className="text-gray-400 hover:text-gray-500">Call Us</b>
                                <p className=" flex items-center gap-2 mt-2">
                                    <FaPhoneAlt />
                                    123-456-7890
                                </p>
                            </li>
                            
                        </ul>
                    </div>
                </div>

                {/* Legal Links */}
                <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <div className="flex space-x-6 mb-4 md:mb-0">
                        <a href="https://www.linkedin.com/in/youcef-morsi-a7579a289" className="text-gray-400 hover:text-gray-500">
                            <FaLinkedinIn className="h-5 w-5 text-gray-400 hover:text-gray-500" />
                        </a>
                        <a href="https://github.com/MorsiYoucef/" className="text-gray-400 hover:text-gray-500">
                            <FaGithub className="h-5 w-5 text-gray-400 hover:text-gray-500" />
                        </a>
                        <a href="https://www.instagram.com/yusufmoriss/" className="text-gray-400 hover:text-gray-500">
                            <FaInstagram className="h-5 w-5 text-gray-400 hover:text-gray-500" />
                        </a>
                    </div>
                    <p className="text-gray-400">© 2025 <a className=" font-bold text-black underline" href="https://www.linkedin.com/in/youcef-morsi-a7579a289">MORSI YOUCEF</a>, Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;