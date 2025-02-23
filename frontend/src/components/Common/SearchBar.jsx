import { useState } from "react"
import { FiSearch } from "react-icons/fi";
import { FaXmark } from "react-icons/fa6";


const SearchBar = () => {
    const [ searchTerm, setSearchTerm ] = useState("")
    const [ isOpen, setIsOpen ] = useState(false)

    const handleSearch = (e) => {
        setIsOpen(!isOpen)
    }
    const handleSearchToggle = (e) => {
        e.preventDefault()
        console.log(searchTerm)
        setIsOpen(!isOpen)
    }
  return (
    <div className={` flex items-center justify-center w-full transition-all duration-300 ${isOpen ? ' absolute top-0 left-0 w-full bg-white h-24 z-50' : ' w-auto'}`}>
      { isOpen ? (
        <form className=" relative flex items-center justify-center w-full top-5" onSubmit={handleSearchToggle}>
            <div className=" relative w-1/2">
                <input type="text" 
                placeholder="Search" 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)}
                className=" bg-gray-100 px-4 py-2 pl-2 pr-12 rounded-lg focus:outline-none w-full placeholder:text-gray-700" />
                <button type="submit" className=" absolute right-2 top-1/2 -transform -translate-y-1/2 text-gray-600 hover:text-gray-800 cursor-pointer" >
                    <FiSearch className=" h-6 w-6" />
                </button>
            </div>
            <button type="submit" onClick={handleSearch}
            className=" absolute right-4 cursor-pointer top-1/2 transform -translate-1/2 text-gray-600 hover:text-gray-800">
                <FaXmark className=" h-6 w-6" />
            </button>
        </form>
      ) : ( <button onClick={handleSearch}>
        <FiSearch className=" h-6 w-6 cursor-pointer"  />
      </button>)}
    </div>
  )
}

export default SearchBar
