import {CourtServices} from "../services/Court.services.js";
import {courtTransformer} from "../transformers/court.transformer.js";
import models from "../db/models/index.js";
import {reservationTransformer} from "../transformers/reservation.transformer.js";

export class CourtController {

    static async create(req, res) {
        const court = await new CourtServices().create(req.body);

        res.json(courtTransformer(court));
    }

    static async findAll(req, res) {

        const { page= 0, perPage=  5 } = req.query;

        const courts = await new CourtServices().findAll(page, perPage);

        res.json({
            "data": courts.map(court => courtTransformer(court)),
            'meta': {
                'page': parseInt(page) || 1,
                'perPage': perPage,
                'total': await models.Court.count()
            }
        });
    }

    static async delete(req, res) {
        const { id } = req.params;

        await new CourtServices().delete(id);

        res.status(204).json({});
    }

    static async findAllReservations(req, res) {
        const { id } = req.params;

        const reservations = await new CourtServices().findAllReservations(id);

        res.json(reservations.map(reservation => reservationTransformer(reservation)));
    }
}