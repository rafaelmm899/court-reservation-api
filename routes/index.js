import userRouter from "./user.router.js";
import express from "express";

function routerApi(app) {
    const router = express.Router();

    app.use('/api/v1', router);

    router.use('/users', userRouter);
}

export default routerApi;