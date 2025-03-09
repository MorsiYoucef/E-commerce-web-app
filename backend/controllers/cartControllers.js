import { Cart } from "../models/Cart.js";
import { Product } from "../models/Product.js";

// Helper function to get a cart by user Id or guest ID 
const getCart = async (userId, guestId) => {
    if (userId) {
        return await Cart.findOne({ user: userId });
    } else if (guestId) {
        return await Cart.findOne({ guestId });
    }
    return null;
};
// @route POST /api/cart
// @desc Add a product to the cart for a guest or logged in user
// @access Public
export const createCart = async (req, res) => {
    const { productId, quantity, size, color, guestId, userId } = req.body;
    try {
        const product = await Product.findById(productId);
        if (!product) return res.status(404).json({ message: "Product not found" });



        // Determine if the user is logged in or guest 
        //  the getCart helper function to find an existing cart for either a logged-in user or a guest.
        let cart = await getCart(userId, guestId);

        //if the cart exists, update it
        if (cart) {
            // It checks if the product is already in the cart with the same size and color.
            const productIndex = cart.products.findIndex(
                (p) => p.productId.toString() === productId &&
                    p.size === size &&
                    p.color === color
            )
            // If found, it increases the quantity.
            if (productIndex > -1) {
                cart.products[productIndex].quantity += quantity;
            } else {
                // Otherwise, it adds a new product to the cart.
                cart.products.push({
                    productId,
                    name: product.name,
                    price: product.price,
                    image: product.images[0].url,
                    size,
                    color,
                    quantity,
                });
            }
            // Recalculate the total price
            cart.totalPrice = cart.products.reduce((total, item) => {
                total + (item.price * item.quantity);
            }, 0);

            await cart.save();
            res.status(200).json(cart);
        } else {
            // create a new cart for the guest or user
            let newCart = new Cart({
                user: userId ? userId : undefined,
                guestId: guestId ? guestId : "guest_" + new Date().getTime(),
                products: [{
                    productId,
                    name: product.name,
                    price: product.price,
                    image: product.images[0].url,
                    size,
                    color,
                    quantity,
                }],
                totalPrice: product.price * quantity,
            });
            await newCart.save();
            return res.status(201).json(newCart);

        }
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
}

// @route PUT /api/cart/:productId
// @desc Update product quantity in cart
// @access Public
export const updateCartItemQuantity = async (req, res) => {
    // const { productId } = req.params;
    const { productId, quantity, size, color, userId, guestId } = req.body;

    try {
        let cart = await getCart(userId, guestId);

        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }

        const productIndex = cart.products.findIndex(p => p.productId.toString() === productId
            && p.size === size && p.color === color);

        if (productIndex === -1) {
            return res.status(404).json({ message: "Product not found in cart" });
        }

        if (productIndex > -1) {
            if (quantity <= 0) {
                cart.products.splice(productIndex, 1); // remove product from cart
            } else {
                cart.products[productIndex].quantity = quantity;
            }
        }

        cart.totalPrice = cart.products.reduce((total, item) =>
            total + (item.price * item.quantity), 0
        );
        await cart.save();

        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};


export const deleteCart = async (req, res) => {
    const { productId, size, color, userId, guestId } = req.body;

    try {
        let cart = await getCart(userId, guestId);

        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }

        const productIndex = cart.products.findIndex(p => p.productId.toString() === productId
            && p.size === size && p.color === color);

        if (productIndex > -1) {
            cart.products.splice(productIndex, 1); // remove product from cart

            cart.totalPrice = cart.products.reduce((total, item) =>
                total + (item.price * item.quantity), 0
            );
            await cart.save();

            return res.status(200).json(cart);
        }
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

export const getCarts = async (req, res) => {
    const { userId, guestId } = req.query;

    try {
        let cart = await getCart(userId, guestId);

        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }

        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

export const mergeCartsOnLogin = async (req, res) => {
        const { userId, guestId } = req.body;

        try {
            const guestCart = await Cart.findOne({ guestId });
            let userCart = await Cart.findOne({ user: userId });

            if (!guestCart) {
                return res.status(404).json({ message: "No guest cart to merge" });
            }

            if (!userCart) {
                userCart = new Cart({ user: userId, products: [], totalPrice: 0 });
            }

            guestCart.products.forEach(guestProduct => {
                const existingProductIndex = userCart.products.findIndex(
                    p => p.productId.toString() === guestProduct.productId.toString() &&
                        p.size === guestProduct.size &&
                        p.color === guestProduct.color
                );

                if (existingProductIndex > -1) {
                    userCart.products[existingProductIndex].quantity += guestProduct.quantity;
                } else {
                    userCart.products.push(guestProduct);
                }
            });

            userCart.totalPrice = userCart.products.reduce((total, item) => 
                total + (item.price * item.quantity), 0
            );

            await userCart.save();
            await Cart.deleteOne({ guestId });

            res.status(200).json(userCart);
        } catch (error) {
            res.status(500).json({ message: "Server error", error: error.message });
        }
    };

