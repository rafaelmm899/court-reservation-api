import {reservationTransformer} from "../transformers/reservation.transformer.js";
import {ReservationServices} from "../services/Reservation.services.js";
import {NotFoundException} from "../exceptions/NotFound.exception.js";

export class ReservationController {
    static async findAll(req, res) {
        const filters = {
            date: req.query.date,
            courtId: req.query.courtId,
        };

        const reservationServices = new ReservationServices();

        const reservations = await reservationServices.findAll(req.user, filters);

        res.send(reservations.map(reservation => reservationTransformer(reservation)));
    }

    static async create(req, res) {
        const reservationServices = new ReservationServices();

        let data = req.body;
        data.userId = req.user.id;

        const reservation = await reservationServices.create(req.body)

        res.send(reservationTransformer(reservation));
    }

    static async delete(req, res) {
        const reservationServices = new ReservationServices();

        await reservationServices.delete(req.user, req.params.id);

        res.status(204).json({});
    }

    static async update(req, res) {
        const reservationServices = new ReservationServices();

        const updatedReservation =await reservationServices.updateTime(req.user, req.params.id, req.body.time);

        res.send(reservationTransformer(updatedReservation));
    }
}