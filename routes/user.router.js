import express from "express";
import {UserController} from "../controllers/User.controller.js";
import {validateMiddleware} from "../middlewares/validate.middleware.js";
import {createUserSchema} from "../schema/user.schema.js";
import {authMiddleware} from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post('/', validateMiddleware(createUserSchema, 'body'),UserController.create);

router.get('/me',
    authMiddleware,
    UserController.userLogged
);

export default router;