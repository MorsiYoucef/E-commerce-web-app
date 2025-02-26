import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import ProductGrid from './ProductGrid'
import { selectedProduct } from '../../constants/constant'
import { similarProduct } from '../../constants/constant'


const ProductDetails = () => {
    const [mainImage, setMainImage] = useState()
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedColor, setSelectedColor] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    useEffect(() => {
        if (selectedProduct?.images?.length > 0) {
            setMainImage(selectedProduct.images[0].url)
        }
    }, [selectedProduct])

    const handleQuantityChange = (action) => {
        if (action === "plus") {
            setQuantity((prev) => prev + 1);
        }
        if (action === "minus" && quantity > 1) {
            setQuantity((prev) => prev - 1);
        }
    };
    const handleAddToCart = () => {
        if (!selectedSize || !selectedColor) {
            toast.error("Please select a size and color before adding to cart.", {
                duration: 1000,
            });
            return
        }

        // Set button disable state and show toast message when product is added to cart
        setIsButtonDisabled(true);

        setTimeout(() => {
            toast.success("Product added to cart!", {
                duration: 1000
            });

            setIsButtonDisabled(false);
        }, 500);
    }
    return (
        <div className=' p-8 '>
            <div className=' max-w-6xl mx-auto bg-white '>
                <div className=" flex flex-col md:flex-row border border-gray-300 rounded-lg p-8">
                    <div className=" hidden md:flex flex-col space-y-4 mr-6">
                        {selectedProduct.images.map((image, index) => (
                            <img
                                src={image.url}
                                alt={image.altText}
                                key={index}
                                onClick={() => setMainImage(image.url)}
                                className=' w-20 h-20 object-cover rounded-lg cursor-pointer border'
                            />
                        ))}
                    </div>
                    <div className=" md:w-1/2">
                        <div className=" mb-4">
                            <img src={mainImage} alt="Main Product" className=' w-full h-full object-cover rounded-lg' />
                        </div>
                    </div>
                    {/* moblie thumbnail */}
                    <div className=" md:hidden flex overscroll-x-scroll space-x-4 mb-4">
                        {selectedProduct.images.map((image, index) => (
                            <img
                                src={image.url}
                                alt={image.altText || `Thumbnail ${index}`}
                                key={index}
                                className=' w-20 h-20 object-cover rounded-lg cursor-pointer border'
                            />
                        ))}
                    </div>
                    <div className=" md:w-1/2 md:ml-10">
                        <h1 className=' text-2xl md:text-3xl font-semibold mb-2'>
                            {selectedProduct.name}
                        </h1>
                        <p className="text-lg text-gray-600 mb-1 line-through">
                            {selectedProduct.originalPrice &&
                                `${selectedProduct.originalPrice}`}
                        </p>
                        <p className="text-xl text-gray-500 mb-2">
                            ${selectedProduct.price}
                        </p>
                        <p className="text-gray-600 mb-4">
                            {selectedProduct.description}
                        </p>

                        <div className="mb-4">
                            <p className="text-gray-700">Color:</p>
                            <div className=" flex gap-2 mt-2">
                                {selectedProduct.colors.map((color, index) => (
                                    <button key={index}
                                        onClick={() => setSelectedColor(color)}
                                        className={` w-8 h-8 rounded-full border  cursor-pointer ${selectedColor === color ? "border-4 border-black" : "border-gray-300"}`} style={{ backgroundColor: color.toLowerCase() }}></button>
                                ))}
                            </div>
                        </div>
                        <div className=" mb-4">
                            <p className=' text-gray-700'>Size:</p>
                            <div className="flex gap-2 mt-2">
                                {selectedProduct.sizes.map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`px-4 py-2 rounded border cursor-pointer ${selectedSize === size ? "border-black" : "border-gray-300"} ${selectedSize === size ? "bg-black text-white" : "text-gray-700"}`}>
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="mb-6">
                            <p className="text-gray-700">Quantity:</p>
                            <div className="flex items-center space-x-4 mt-2">
                                <button
                                    onClick={() => handleQuantityChange("minus")}
                                    className="px-2 py-1 bg-gray-200 rounded text-lg cursor-pointer"
                                >-</button>
                                <span className="text-lg">{quantity}</span>
                                <button className="px-2 py-1 bg-gray-200 rounded text-lg cursor-pointer"
                                    onClick={() => handleQuantityChange("plus")}
                                >+</button>
                            </div>
                        </div>
                        <button className={`bg-black text-white py-2 px-6 rounded w-full mb-4   ${isButtonDisabled ? " cursor-not-allowed opacity-50" : " hover:bg-gray-900 cursor-pointer"}`}
                            onClick={handleAddToCart}
                            disabled={isButtonDisabled}
                        >
                            {isButtonDisabled ? "Adding to cart..." : "Add to cart"}
                        </button>
                        <div className="mt-10 text-gray-700">
                            <h3 className="text-xl font-bold mb-4">Characteristics:</h3>
                            <table className="w-full text-left text-sm text-gray-600">
                                <tbody>
                                    <tr>
                                        <td className="py-1">Brand:</td>
                                        <td className="py-1">{selectedProduct.brand}</td>
                                    </tr>
                                    <tr>
                                        <td className="py-1">Material:</td>
                                        <td className="py-1">{selectedProduct.material}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
                <div className=" mt-20">
                    <h2 className=' text-2xl text-center font-medium mb-4'>You May also like</h2>
                    <ProductGrid products={similarProduct} />
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
