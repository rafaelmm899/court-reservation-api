import express from "express";
import {AuthController} from "../controllers/Auth.controller.js";
import {validate} from "../middlewares/validate.js";
import {loginSchema} from "../schema/auth.schema.js";

const router = express.Router();

router.post(
    '/login',
    validate(loginSchema, 'body'),
    AuthController.login
);

export default router;