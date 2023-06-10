import express from "express";
import { getAllUsers, signin, signup } from "../controllers/auth";


const router = express.Router();

router.post("/signin", signin);
router.post("/signup", signup);
router.get("/users", getAllUsers);

export default router;