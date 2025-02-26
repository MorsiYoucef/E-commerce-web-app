import Hero from "../components/Layout/Hero"
import NewArrivals from "../components/Products/NewArrivals"
import ProductDetails from "../components/Products/ProductDetails"
import ProductGrid from "../components/Products/ProductGrid"
import { placeholderProducts } from "../constants/constant"


const Home = () => {
  return (
    <div>
      <Hero />
      <NewArrivals />
      <h2 className=" text-3xl text-center font-bold">
        Best Seller
      </h2>
      <ProductDetails />
      <div className=" container mx-auto my-20">
        <h2 className="text-3xl text-center font-bold mb-4">
          Top Wears for Women
        </h2>
        <ProductGrid products={placeholderProducts} />
      </div>
    </div>
  )
}

export default Home
