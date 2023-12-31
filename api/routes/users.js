import express from "express";
import { getAllUsers, getUser, updateUser } from "../controllers/user.js";

const router = express.Router();

router.get('/find/:userId', getUser)
router.put("/", updateUser)
router.get('/all', getAllUsers)

export default router;