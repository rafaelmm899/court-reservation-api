import express from "express";
import {CourtController} from "../controllers/Court.controller.js";
import {createCourtSchema} from "../schema/court.schema.js";
import {validateMiddleware} from "../middlewares/validate.middleware.js";
import {authMiddleware} from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get(
    '/',
    authMiddleware,
    CourtController.findAll
);

router.post(
    '/',
    authMiddleware,
    validateMiddleware(createCourtSchema, 'body'),
    CourtController.create
);

router.delete(
    '/:id',
    authMiddleware,
    CourtController.delete
);

router.get('/:id/reservations', authMiddleware, CourtController.findAllReservations);

export default router;