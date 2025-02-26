import HeroImg from '../../assets/01.jpg'
import { categories } from '../../constants/constant';
import ScrollVelocity from '../Common/ScrollVelocity';

const Hero = () => {
    const velocity = 40

    return (
        <>
            <div className="relative text-white h-[50%]">
                {/* Background Image (Optional) */}
                <img src={HeroImg} className=" w-full h-[400px] md:h-[600px] lg:h-[800px]" />
                <div className=' absolute inset-0 top-40'>
                    <div className=' text-center text-white'>
                        <h1 className=' text-4xl md:text-9xl zorina font-bold uppercase mb-4'>
                            Winter is <br /> comming
                        </h1>
                        <p className=' text-sm tracking-tighter md:text-lg mb-6 font-light'>Explore our winter outfits with fast shipping.</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto h-full -mt-20 lg:-mt-80">
                    {categories.map((category, index) => (
                        <div key={index} className=' bg-white rounded-xl'>
                            <div className="relative w-full h-[600px] overflow-hidden rounded-xl shadow-lg cursor-pointer hover:opacity-80 ">
                                <img
                                    src={category.image}
                                    alt={category.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-4 left-4 text-white">
                                    <p className="text-sm">Shop the collection</p>
                                    <h3 className="text-lg font-semibold">{category.title}</h3>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
            <div className=''>
                <ScrollVelocity
                    texts={['Nike Air Jordan Addidas ', 'Zara Bershka Pull&Bear Celio']}
                    velocity={velocity}
                    className="custom-scroll-text" />
            </div>

        </>

    )
}

export default Hero
