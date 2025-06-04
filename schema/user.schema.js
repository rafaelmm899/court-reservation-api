import Joi from "joi";

export const createUserSchema = Joi.object({
    name: Joi.string().required().min(3).max(20),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8).max(20)
});