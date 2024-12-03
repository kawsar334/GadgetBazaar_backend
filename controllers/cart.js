const Cart = require("../models/Cart");
const User = require("../models/User");




// app.post('/api/cart', async (req, res) => {
//     try {
//         const { userId, cart, totalPrice } = req.body;

//         const newCart = new CartModel({
//             userId,
//             cart,
//             totalPrice,
//         });

//         await newCart.save();
//         res.status(200).json({ message: 'Cart saved successfully!' });
//     } catch (error) {
//         res.status(500).json({ error: 'Failed to save cart.' });
//     }
// });
// create new category
const createCart = async (req, res, next) => {
    try {         
        const newCat = new Cart({
            ...req.body
        });
        const saveCart = await newCat.save()
        res.status(200).json(saveCart);
        console.log(saveCart);


    } catch (err) {
        console.log(err)
        next(err);
    }
}


// get all category
// const getCart = async (req, res, next) => {
//     try {

//         const orders = await Cart.find({}).sort({createdAt:-1});
//         const user = promise.all()
//         res.status(200).json({
//             message: `order lists  `, 
//             success: true,
//             orders
//         })
//     } catch (err) { 
//         next(err)
//     }
// }
const getCart = async (req, res, next) => {
    try {
        const carts = await Cart.find({})
            .sort({ createdAt: -1 })
        res.status(200).json({
            message: "Cart list retrieved successfully",
            success: true,
            data: carts,
        });
    } catch (err) {
        console.error("Error retrieving carts:", err);
        next(err);
    }
};



module.exports = { createCart, getCart }