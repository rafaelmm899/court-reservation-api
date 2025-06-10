import Joi from "joi";

export const listReservationSchema = Joi.object({
    date: Joi.date().optional(),
    courtId: Joi.number().optional()
});

export const createReservationSchema = Joi.object({
    date: Joi.date().required(),
    time: Joi.string().required(),
    courtId: Joi.number().required()
});
