import { Link } from 'react-router-dom'
import { HiOutlineShoppingBag, HiOutlineUser } from 'react-icons/hi'
import SearchBar from './SearchBar'

const Navbar = () => {
    return (
        <nav className=' container mx-auto flex items-center justify-between py-4 px-6'>
            <div>
                <Link to="/" className=' text-2xl font-medium'>Rabbit</Link>

            </div>
            <div className=' hidden md:flex space-x-6'>
                <Link to="/about" className=' text-gray-700 hover:text-black text-sm font-medium uppercase'>Men</Link>
                <Link to="/products" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>Womer</Link>
                <Link to="/contact" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>Top Wear</Link>
                <Link to="/contact" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>Bottom wear</Link>
            </div>

            <div className=' flex items-center space-x-4'>
                <SearchBar />
                <Link to='/profile' className=' cursor-pointer'>
                    <HiOutlineUser className=' h-6 w-6 text-gray-700' />
                </Link>
                <button className=' relative hover:text-black cursor-pointer'>
                    <HiOutlineShoppingBag className=' h-6 w-6 text-gray-700' />
                    <span className=' absolute -top-1 bg-rabbit-red text-white text-xs rounded-full px-2 py-0.5'>4</span>
                </button>

            </div>
        </nav>
    )
}

export default Navbar
