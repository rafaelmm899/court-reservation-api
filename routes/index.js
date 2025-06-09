import userRouter from "./user.router.js";
import express from "express";
import authRouter from "./auth.router.js";
import courtRouter from "./court.router.js";

function routerApi(app) {
    const router = express.Router();

    app.use('/api/v1', router);

    router.use('/users', userRouter);
    router.use('/auth', authRouter);
    router.use('/courts', courtRouter);
}

export default routerApi;