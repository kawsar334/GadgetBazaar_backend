const mongoose = require('mongoose');
const { Schema } = mongoose;


const productSchema = new mongoose.Schema({
    userId: { type: String, required: true },
   
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    specification: {
        type: [String],
        required: true,
    },
    availability: {
        type: Boolean,
        default: true,
    },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5,
    },
    
},{timestamps:true})




const Product =mongoose.model('Product', productSchema);
module.exports = Product