import { Product } from "../models/Product.js"



export const createProduct = async (req, res) => {
    try {
        const {
            name,
            description,
            price,
            discountPrice,
            countInStock,
            category,
            brand,
            sizes,
            colors,
            collections,
            material,
            gender,
            images,
            isFeatured,
            isPublished,
            tags,
            dimensions,
            weight,
            sku,
        } = req.body;

        const product = new Product({
            name,
            description,
            price,
            discountPrice,
            countInStock,
            category,
            brand,
            sizes,
            colors,
            collections,
            material,
            gender,
            images,
            isFeatured,
            isPublished,
            tags,
            dimensions,
            weight,
            sku,
            user: req.userId,
        });

        const createdProduct = await product.save();
        res.status(201).json(createdProduct);
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: error.message });

    }
}

export const updateProduct = async (req, res) => {
    try {
        const {
            name,
            description,
            price,
            discountPrice,
            countInStock,
            category,
            brand,
            sizes,
            colors,
            collections,
            material,
            gender,
            images,
            isFeatured,
            isPublished,
            tags,
            dimensions,
            weight,
            sku,
        } = req.body;

        const product = await Product.findById(req.params.id);

        if (product) {
            product.name = name || product.name;
            product.description = description || product.name;
            product.price = price || product.price;
            product.discountPrice = discountPrice || product.discountPrice;
            product.countInStock = countInStock || product.countInStock;
            product.category = category || product.category;
            product.brand = brand || product.brand;
            product.sizes = sizes || product.sizes;
            product.colors = colors || product.colors;
            product.collections = collections || product.collections;
            product.material = material || product.material;
            product.gender = gender || product.gender;
            product.images = images || product.images;
            product.isFeatured = isFeatured !== undefined ? isFeatured : product.isFeatured;
            product.isPublished =
                isPublished !== undefined ? isPublished : product.isPublished;
            product.tags = tags || product.tags;
            product.dimensions = dimensions || product.dimensions;
            product.weight = weight || product.weight;
            product.sku = sku || product.sku;

            // save to database
            const updatedProduct = await product.save();
            res.json(updatedProduct);
        } else {
            res.status(404).json({ message: "Product not found" });
        }
    } catch (error) {

    }
}
export const deleteProduct = async (req, res) => {
    const { id } = req.params; // Get the product ID from the URL parameters
    console.log(id)

    try {
        // Find the product by ID and delete it
        const deletedProduct = await Product.findByIdAndDelete(id);

        // If the product is not found, return an error
        if (!deletedProduct) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }

        // Return a success response
        res.status(200).json({ success: true, message: "Product deleted successfully", data: deletedProduct });
    } catch (error) {
        console.error("Error deleting product:", error);
        res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
}
export const getProducts = async (req, res) => {
    try {
        const { collection, size, color, gender, minPrice, maxPrice, sortBy, search, category, material, brand, limit } = req.query

        let query = {}

        if (collection && collection.toLocaleLowerCase() !== "all") {
            query.collections = collection;
        }
        if (category && category.toLocaleLowerCase() !== "all") {
            query.category = category;
        }
        if (material) {
            query.material = { $in: material.split(",") };
        }
        if (brand) {
            query.brand = { $in: brand.split(",") };
        }
        if (size) {
            query.sizes = { $in: size.split(",") };
        }
        if (color) {
            query.colors = { $in: [color] };
        }
        if (gender) {
            query.gender = gender;
        }
        if (minPrice || maxPrice) {
            query.price = {};
            if (minPrice) query.price.$gte = Number(minPrice);
            if (maxPrice) query.price.$lte = Number(maxPrice);
        }
        if (search) {
            query.$or = [
                { name: { $regex: search, $options: "i" } },
                { description: { $regex: search, $options: "i" } }
            ];
        }
        let sortOb = {};
        // Sort Logic 
        if (sortBy) {
            switch (sortBy) {
                case "priceAsc":
                    sortOb = { price: 1 };
                    break;
                case "priceDesc":
                    sortOb = { price: -1 };
                    break;
                case "popularity":
                    sortOb = { rating: -1 };
                default:
                    break;
            }
        }
        // Fetch products and apply sorting and limit 
        let products = await Product.find(query).sort(sortOb).limit(Number(limit) || 0);
        res.json(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ success: false, message: "Server error", error: error.message });

    }
}


export const productDetails = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }
        res.json(product);
    } catch (error) {
        console.error("Error fetching product:", error);
        res.status(500).json({ success: false, message: "Server error", error: error.message });

    }
}

export const similarProducts = async (req, res) => {
    const { id } = req.params

    try {
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }

        const similarProducts = await Product.find({
            $and: [
                { _id: { $ne: product._id } },
                { gender: product.gender },
                { category: product.category },
            ],
        }).limit(4);

        res.json(similarProducts);
    } catch (error) {
        console.error("Error fetching similar products:", error);
        res.status(500).json({ success: false, message: "Server error", error: error.message });

    }
}


// @route GET /api/products/best-seller
// @desc Get the products with highest rating
// @access Public
export const bestSellar = async (req, res) => { 
    try {
        const bestSellar = await Product.findOne().sort({ rating:-1})
        if( !bestSellar){
            return res.status(404).json({ success: false, message: "No products found" });
        }
        res.json(bestSellar);
    } catch (error) {
        console.error("Error fetching best seller products:", error);
        res.status(500).json({ success: false, message: "Server error", error: error.message });
        
    }
}

export const newArrivals = async ( req, res) =>{
    try {
        const newArrivals = await Product.find().sort({ createdAt: -1 }).limit(8)
        if(!newArrivals){
            return res.status(404).json({ success: false, message: "No products found" });
        }
        res.json(newArrivals);
    } catch (error) {
        console.error("Error fetching new arrivals products:", error);
        res.status(500).json({ success: false, message: "Server error", error: error.message });
        
    }
}