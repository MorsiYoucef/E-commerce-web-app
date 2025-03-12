import { Product } from '../models/Product.js';

// Get all products
export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching products', error: error.message });
    }
};

// Get a single product by ID
export const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching product', error: error.message });
    }
};

// // Create a new product
// export const createProduct = async (req, res) => {
//     try {
//         const newProduct = new Product(req.body);
//         const savedProduct = await newProduct.save();
//         res.status(201).json(savedProduct);
//     } catch (error) {
//         res.status(400).json({ message: 'Error creating product', error: error.message });
//     }
// };
//
// // Update a product
// export const updateProduct = async (req, res) => {
//     try {
//         const updatedProduct = await Product.findByIdAndUpdate(
//             req.params.id,
//             req.body,
//             { new: true, runValidators: true }
//         );
//         if (!updatedProduct) {
//             return res.status(404).json({ message: 'Product not found' });
//         }
//         res.status(200).json(updatedProduct);
//     } catch (error) {
//         res.status(400).json({ message: 'Error updating product', error: error.message });
//     }
// };
//
// // Delete a product
// export const deleteProduct = async (req, res) => {
//     try {
//         const deletedProduct = await Product.findByIdAndDelete(req.params.id);
//         if (!deletedProduct) {
//             return res.status(404).json({ message: 'Product not found' });
//         }
//         res.status(200).json({ message: 'Product deleted successfully' });
//     } catch (error) {
//         res.status(500).json({ message: 'Error deleting product', error: error.message });
//     }
// };
//
// // Toggle product feature status
// export const toggleProductFeature = async (req, res) => {
//     try {
//         const product = await Product.findById(req.params.id);
//         if (!product) {
//             return res.status(404).json({ message: 'Product not found' });
//         }
//         product.isFeatured = !product.isFeatured;
//         await product.save();
//         res.status(200).json(product);
//     } catch (error) {
//         res.status(400).json({ message: 'Error toggling feature status', error: error.message });
//     }
// };
//
// // Toggle product publish status
// export const toggleProductPublish = async (req, res) => {
//     try {
//         const product = await Product.findById(req.params.id);
//         if (!product) {
//             return res.status(404).json({ message: 'Product not found' });
//         }
//         product.isPublished = !product.isPublished;
//         await product.save();
//         res.status(200).json(product);
//     } catch (error) {
//         res.status(400).json({ message: 'Error toggling publish status', error: error.message });
//     }
// };