import express from "express";
import {UserController} from "../controllers/User.controller.js";
import {validate} from "../middlewares/validate.js";
import {createUserValidator} from "../validators/user.validator.js";

const router = express.Router();

router.post('/', validate(createUserValidator, 'body'),UserController.create);

export default router;