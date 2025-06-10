import express from "express";
import {ReservationController} from "../controllers/Reservation.controller.js";
import {authMiddleware} from "../middlewares/auth.middleware.js";
import {validateMiddleware} from "../middlewares/validate.middleware.js";
import {createReservationSchema, listReservationSchema} from "../schema/reservation.schema.js";

const router = express.Router();

router.get('/', authMiddleware, validateMiddleware(listReservationSchema, 'query'),ReservationController.findAll);

router.post('/', authMiddleware, validateMiddleware(createReservationSchema, 'body'),ReservationController.create);

export default router;
