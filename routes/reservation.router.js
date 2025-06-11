import express from "express";
import {ReservationController} from "../controllers/Reservation.controller.js";
import {authMiddleware} from "../middlewares/auth.middleware.js";
import {validateMiddleware} from "../middlewares/validate.middleware.js";
import {createReservationSchema, listReservationSchema, updateReservationSchema} from "../schema/reservation.schema.js";

const router = express.Router();

router.get('/', authMiddleware, validateMiddleware(listReservationSchema, 'query'),ReservationController.findAll);

router.post('/', authMiddleware, validateMiddleware(createReservationSchema, 'body'),ReservationController.create);

router.delete('/:id', authMiddleware, ReservationController.delete);

router.put('/:id', authMiddleware, validateMiddleware(updateReservationSchema, 'body'),ReservationController.update);

export default router;
