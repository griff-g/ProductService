import Joi from "joi";

export const createProduct_validator = Joi.object({
    category: Joi.string().required(),
    product_name: Joi.string().min(3).max(50).required(),
    image: Joi.string().required(),
    brand: Joi.string().required(),
    product_description: Joi.string().min(5).max(450).required(),
    price: Joi.number().required(),
    rating: Joi.number().min(0).max(5).required(),
});

export const getProduct_validator = Joi.object({
    slug: Joi.string().required(),
});

export const updateProduct_validator = Joi.object({
    slug: Joi.string().required(),
});
