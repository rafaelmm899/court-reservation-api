import userRouter from "./user.router.js";
import express from "express";
import authRouter from "./auth.router.js";
import courtRouter from "./court.router.js";
import reservationRouter from "./reservation.router.js";

function routerApi(app) {
    const router = express.Router();

    app.use('/api/v1', router);

    router.use('/users', userRouter);
    router.use('/auth', authRouter);
    router.use('/courts', courtRouter);
    router.use('/reservations', reservationRouter);
}

export default routerApi;