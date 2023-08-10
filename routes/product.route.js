import {Router} from "express";
import {createProduct, getAllProducts, getProduct, updateProduct, uploadImage} from "../controllers/product.controller.js";
import {
    createProduct_validator,
    getProduct_validator,
    updateProduct_validator,
} from "../validators/product.validator.js";
import {reqValidator} from "../middleware/request.validator.js";
import {imageProcessing} from "../middleware/imageProcessing.js";

const router = Router();

router.post("/create", reqValidator(createProduct_validator), createProduct);

router.get("/", reqValidator(getProduct_validator), getProduct);

router.put("/update", reqValidator(updateProduct_validator), updateProduct);

router.get("/all",getAllProducts)

router.post("/image/upload", imageProcessing, uploadImage)

export default router;