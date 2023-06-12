import express from "express";
import {
    createProduct,
    updateProduct,
    getAllProduct,
    getOneProduct,
    removeProduct,
    searchProduct,
} from "../controllers/product";
import { checkPermission } from "../middlewares/checkPermission";

const router = express.Router();

router.get("/products", getAllProduct);
router.get("/products/:id", getOneProduct);
router.post("/products",checkPermission, createProduct);
router.delete("/products/:id",checkPermission, removeProduct);
router.patch("/products/:id",checkPermission, updateProduct);
router.post("/products/search", searchProduct);


export default router;