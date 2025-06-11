import models from "../db/models/index.js";
import {CourtServices} from "./Court.services.js";
import {ValidationException} from "../exceptions/Validation.exception.js";
import {NotFoundException} from "../exceptions/NotFound.exception.js";

export class ReservationServices {
    async findAll(user, filters = {}) {
        const where = this.#buildWhereClause(filters);

        return await models.Reservation.findAll({where: {...where, userId: user.id}});
    }

    #buildWhereClause(filters) {
        const where = {};

        if (filters.date) {
            where.date = filters.date;
        }

        if (filters.courtId) {
            where.courtId = filters.courtId;
        }

        return where;
    }

    async create(data) {
        try {
            await new CourtServices().findOne(data.courtId);
        }catch (e) {
            if (e instanceof NotFoundException) {
                throw new ValidationException([
                    {
                        message: "The court does not exist",
                        path: ["courtId"]
                    }
                ]);
            }
        }

        if (await models.Reservation.findOne({ where: { date: data.date, time: data.time, courtId: data.courtId } })) {
            throw new ValidationException([
                {
                    message: "The reservation is already in use",
                    path: ["time"]
                }
            ]);
        }

        return models.Reservation.create(data, {
            include: [
                'user',
                'court'
            ]
        });
    }

    async findOne(id) {
        const reservation = await models.Reservation.findByPk(id, {
            include: [
                'user',
                'court'
            ]
        });

        if (!reservation) {
            throw new NotFoundException();
        }

        return reservation;
    }

    async delete(user, id) {
        const reservation = this.#findOneByUser(id, user);

        reservation.destroy();
    }

    async updateTime(user, reservationId, newTime) {
        const reservation = await this.#findOneByUser(reservationId, user);

        reservation.time = newTime;

        await reservation.save();

        return reservation;
    }

    async #findOneByUser(reservationId, user) {
        const reservation = await models.Reservation.findOne({where: {id: reservationId, userId: user.id}});
        if (!reservation) {
            throw new NotFoundException();
        }

        return reservation;
    }
}