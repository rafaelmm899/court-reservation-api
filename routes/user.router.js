import express from "express";
import {UserController} from "../controllers/User.controller.js";
import {validate} from "../middlewares/validate.js";
import {createUserSchema} from "../schema/user.schema.js";

const router = express.Router();

router.post('/', validate(createUserSchema, 'body'),UserController.create);

export default router;