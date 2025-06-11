import Joi from "joi";

export const listReservationSchema = Joi.object({
    date: Joi.date().optional(),
    courtId: Joi.number().optional()
});

export const createReservationSchema = Joi.object({
    date: Joi.date().greater('now').required(),
    time: Joi.string().required(),
    courtId: Joi.number().required()
});

export const updateReservationSchema = Joi.object({
    time: Joi.string().regex(/^([0-9]{2})\:([0-9]{2})$/).required(),
})