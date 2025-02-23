import { Link } from "react-router-dom"
import { TbBrandMeta } from "react-icons/tb"
import { IoLogoInstagram } from 'react-icons/io'
import { RiTwitterXLine } from 'react-icons/ri'


const TopBar = () => {
    return (
        <div className=" bg-rabbit-red text-white">
            <div className=" container mx-auto flex justify-center items-center py-3">
                <div className="space-x-4 items-center md:flex hidden">
                    <Link to="/#" className=" hover:text-gray-300">
                        <TbBrandMeta className=" h-5 w-5" />
                    </Link>
                    <Link to="/#" className=" hover:text-gray-300">
                        <IoLogoInstagram className=" h-5 w-5" />
                    </Link>
                    <Link to="/#" className=" hover:text-gray-300">
                        <RiTwitterXLine className=" h-5 w-5" />
                    </Link>
                </div>
                <div className=" text-sm text-center flex-grow">
                    <span> We ship worldwid - Fast and reliable shipping</span>
                </div>
                <div className=" text-sm hidden md:block">
                    <Link>
                        <p>+(213)55859430</p>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default TopBar
