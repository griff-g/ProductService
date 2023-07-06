import { generateProductSlug } from "../utils/product.util.js";
import productService from "../models/product.model.js";
import { responseSend } from "../utils/server.util.js";

export const createProduct = async (req, res) => {
	try {
		const { category, product_name, image, brand, product_description, price, rating } =
			req.body;

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
		const productData = productService.createDocument(insertDocument);
		return responseSend(res, 200, {
			sucess: true,
			message: "successfully added product",
			productData,
		});
	} catch(error) {
        return responseSend(res,400,{success:false,message:error.message})
    }
};
