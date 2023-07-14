import {generateProductSlug} from "../utils/product.util.js";
import productService from "../models/product.model.js";
import {responseSend} from "../utils/server.util.js";
/**
 * The `createProduct` function is an asynchronous function that creates a new product in a database
 * and returns a response with the created product data.
 * @param req - The `req` parameter is the request object that contains information about the HTTP
 * request made by the client. It includes details such as the request headers, request body, request
 * method, and request URL. In this case, the `req` object is used to access the request body using
 * `req.body
 * @param res - The `res` parameter is the response object that is used to send the response back to
 * the client. It is typically an instance of the `http.ServerResponse` class in Node.js.
 * @returns a response with a status code of 200 and an object containing the properties "success",
 * "message", and "productData".
 */

export const createProduct = async (req, res) => {
    try {
        const {category, product_name, image, brand, product_description, price, rating} = req.body;

        const slug = generateProductSlug(product_name);
        const insertDocument = {
            slug,
            category,
            product_name,
            image,
            brand,
            product_description,
            price,
            rating,
        };
        const productData = await productService.createDocument(insertDocument);
        return responseSend(res, 200, {
            sucess: true,
            message: "successfully added product",
            data: productData,
        });
    } catch (error) {
        return responseSend(res, 400, {success: false, message: error.message});
    }
};

export const getProduct = async (req, res) => {
    try {
        const {slug} = req.query;
        const filter = {
            slug,
        };
        const select = {
            _id: 0,
            product_name: 1,
        };
        const productData = await productService.readDocument(filter, select);
        return responseSend(res, 200, {
            success: true,
            message: "fetched product successfully",
            data: productData,
        });
    } catch (error) {
        return responseSend(res, 400, {sucess: false, message: error.message});
    }
};

export const updateProduct = async (req, res) => {
    try {
        const {slug} = req.query;
        const filter = {
            slug,
        };
        const select = {
            _id: 0,
            product_name: 1,
        };
        const productData = await productService.updateDocument(filter, select);

        return responseSend(res, 200, {
            success: true,
            message: "fetched product successfully",
            data: productData,
        });
    } catch (error) {
        return responseSend(res, 400, {sucess: false, message: error.message});
    }
};
