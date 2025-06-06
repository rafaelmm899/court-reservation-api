import express from "express";
import {AuthController} from "../controllers/Auth.controller.js";
import {validateMiddleware} from "../middlewares/validate.middleware.js";
import {loginSchema} from "../schema/auth.schema.js";

const router = express.Router();

router.post(
    '/login',
    validateMiddleware(loginSchema, 'body'),
    AuthController.login
);

export default router;