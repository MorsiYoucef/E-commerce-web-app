import WomenImg from '../assets/womens-collection.webp'
import MenImg from '../assets/mens-collection.webp'


export const selectedProduct = {
  name: " Stylish Jacket",
  price: 89.99,
  originalPrice: 99.99,
  description: "This stylish jacket features a comfortable fit and is made from a durable material.",
  brand: " fashionBrand",
  material: " Leather",
  sizes: ["S", "M", "L", "XL"],
  colors: ["Black", "Brown", "Blue"],
  images: [
    {
      url: "http://picsum.photos/500/500?random=1",
      altText: "Stylish Jacket 1"
    },
    {
      url: "http://picsum.photos/500/500?random=2",
      altText: "Stylish Jacket 2"
    }
  ],
}

export const placeholderProducts = [
  {
    id: 1,
    name: "Basic Tee",
    price: 29.99,
    images: [{ url: "https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-02.jpg" }],
  },
  {
    id: 2,
    name: "Basic Tee",
    price: 29.99,
    images: [{ url: "https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-03.jpg" }],
  }, {
    id: 3,
    name: "Basic Tee",
    price: 29.99,
    images: [{ url: "https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-03.jpg" }],
  },
  {
    id: 4,
    name: "Basic Tee",
    price: 29.99,
    images: [{ url: "https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-04.jpg" }],
  },
  {
    id: 5,
    name: "Basic Tee",
    price: 29.99,
    images: [{ url: "https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg" }],
  },
  {
    id: 6,
    name: "Basic Tee",
    price: 29.99,
    images: [{ url: "https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-02.jpg" }],
  }, {
    id: 7,
    name: "Basic Tee",
    price: 29.99,
    images: [{ url: "https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-03.jpg" }],
  },
  {
    id: 8,
    name: "Basic Tee",
    price: 29.99,
    images: [{ url: "https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-04.jpg" }],
  }
]

export const similarProduct = [
  {
    id: 1,
    name: "Basic Tee",
    price: 29.99,
    images: [{ url: "https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-02.jpg" }],
  },
  {
    id: 2,
    name: "Basic Tee",
    price: 29.99,
    images: [{ url: "https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-03.jpg" }],
  }, {
    id: 3,
    name: "Basic Tee",
    price: 29.99,
    images: [{ url: "https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-03.jpg" }],
  },
  {
    id: 4,
    name: "Basic Tee",
    price: 29.99,
    images: [{ url: "https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-04.jpg" }],
  }
]

export const categories = [
  {
    title: "Women's",
    image: WomenImg
  },
  {
    title: "Men's",
    image: MenImg,
  },
];

export const navigation = {
  categories: [
    {
      id: 'women',
      name: 'Women',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', href: '#' },
            { name: 'Dresses', href: '#' },
            { name: 'Pants', href: '#' },
            { name: 'Denim', href: '#' },
            { name: 'Sweaters', href: '#' },
            { name: 'T-Shirts', href: '#' },
            { name: 'Jackets', href: '#' },
            { name: 'Activewear', href: '#' },
            { name: 'Browse All', href: '#' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', href: '#' },
            { name: 'Wallets', href: '#' },
            { name: 'Bags', href: '#' },
            { name: 'Sunglasses', href: '#' },
            { name: 'Hats', href: '#' },
            { name: 'Belts', href: '#' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Full Nelson', href: '#' },
            { name: 'My Way', href: '#' },
            { name: 'Re-Arranged', href: '#' },
            { name: 'Counterfeit', href: '#' },
            { name: 'Significant Other', href: '#' },
          ],
        },
      ],
    },
    {
      id: 'men',
      name: 'Men',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc:
            'https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
          imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'Artwork Tees',
          href: '#',
          imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/category-page-02-image-card-06.jpg',
          imageAlt:
            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', href: '#' },
            { name: 'Pants', href: '#' },
            { name: 'Sweaters', href: '#' },
            { name: 'T-Shirts', href: '#' },
            { name: 'Jackets', href: '#' },
            { name: 'Activewear', href: '#' },
            { name: 'Browse All', href: '#' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', href: '#' },
            { name: 'Wallets', href: '#' },
            { name: 'Bags', href: '#' },
            { name: 'Sunglasses', href: '#' },
            { name: 'Hats', href: '#' },
            { name: 'Belts', href: '#' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Re-Arranged', href: '#' },
            { name: 'Counterfeit', href: '#' },
            { name: 'Full Nelson', href: '#' },
            { name: 'My Way', href: '#' },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: 'Top Wear', href: '#' },
    { name: 'Top Bottom', href: '#' },
  ],
}