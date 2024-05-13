import express from "express";
import { getUsers } from "../controlar/userControlar.js";

 
const router = express.Router();

router.get("/allUsers",getUsers)

export default router;