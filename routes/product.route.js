import { Router } from "express";
import { createProduct } from "../controllers/product.controller.js";
import { product_validator } from "../validators/product.validator.js";
import { reqValidator } from "../middleware/request.validator.js";

const router = Router();

router.post("/create", reqValidator(product_validator),(req,res)=>{
    createProduct(req,res)
});

export default router