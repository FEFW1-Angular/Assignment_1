import express from "express";
import {
    createProduct,
    updateProduct,
    getAllProduct,
    getOneProduct,
    removeProduct,
    searchProduct,
} from "../controllers/product";

const router = express.Router();

router.get("/products", getAllProduct);
router.get("/products/:id", getOneProduct);
router.post("/products", createProduct);
router.post("/products/search", searchProduct);
router.delete("/products/:id", removeProduct);
router.patch("/products/:id", updateProduct);

export default router;