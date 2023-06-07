import express from "express";
import { create, get, getAll, remove, update } from "../controllers/blog";


const router = express.Router();
router.get("/blog", getAll);
router.get("/blog/:id", get);
router.post("/blog", create);
router.delete("/blog/:id", remove);
router.patch("/blog/:id", update);

export default router;