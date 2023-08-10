import {Schema,model} from "mongoose";
import MongoService from "../services/db.service.js";

const productSchema = new Schema({
    product_id: {
        type: String,
        unique: true,
    },
    category: {
        type: String,
        required: true,
    },
    product_name: {
        type: String,
        required: true,
        unique: true,
    },
    image: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    product_description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true,
    },
});

productSchema.pre("save", function (next) { // 
    this.product_id = this._id; 
    next();
});

const productModel = model("products", productSchema); //
const ProductService = new MongoService(productModel);

export default ProductService;
