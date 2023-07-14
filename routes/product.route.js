import {Router} from "express";
import {createProduct, getProduct, updateProduct} from "../controllers/product.controller.js";
import {
    createProduct_validator,
    getProduct_validator,
    updateProduct_validator,
} from "../validators/product.validator.js";
import {reqValidator} from "../middleware/request.validator.js";

const router = Router();

router.post("/create", reqValidator(createProduct_validator), createProduct);

router.get("/", reqValidator(getProduct_validator), getProduct);

router.get("/", reqValidator(updateProduct_validator), updateProduct);

export default router;
