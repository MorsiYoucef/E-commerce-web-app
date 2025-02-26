import { Link } from 'react-router-dom'

const ProductGrid = ({ products }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-white gap-5">
            {products.map((product, index) => (
                <Link key={index} to="#" className="block">
                    <div className="bg-white p-4 rounded-lg cursor-pointer hover:opacity-80">
                        <div className="w-full h-96 mb-4">
                            <img
                                src={product.images[0].url}
                                alt={product.images[0].alText || product.name}
                                className="w-full h-full object-cover rounded-lg"
                            />
                            <h3 className=' text-sm my-2'>  {product.name}</h3>
                            <p className=" text-gray-500 font-medium text-sm ">
                                ${product.price}
                            </p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default ProductGrid
