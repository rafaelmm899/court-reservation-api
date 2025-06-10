import {reservationTransformer} from "../transformers/reservation.transformer.js";
import {ReservationServices} from "../services/Reservation.services.js";

export class ReservationController {
    static async findAll(req, res) {
        const filters = {
            date: req.query.date,
            courtId: req.query.courtId,
        };

        const reservationServices = new ReservationServices();

        const reservations = await reservationServices.findAll(filters, { include: ['user', 'court'] });

        res.send(reservations.map(reservation => reservationTransformer(reservation)));
    }

    static async create(req, res) {
        const reservationServices = new ReservationServices();

        let data = req.body;
        data.userId = req.user.id;

        const reservation = await reservationServices.create(req.body)

        res.send(reservationTransformer(reservation));
    }
}