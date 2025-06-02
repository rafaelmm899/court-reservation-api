import express from "express";
import {UserController} from "../controllers/User.controller.js";

const router = express.Router();

router.post('/', UserController.create);

export default router;