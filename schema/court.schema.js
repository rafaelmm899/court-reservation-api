import Joi from "joi";
import {CourtType} from "../enums/CourtType.js";

export const createCourtSchema = Joi.object({
    name: Joi.string().required().min(3).max(20),
    type: Joi.string().required().valid(CourtType.FOOTBALL, CourtType.TENNIS, CourtType.PADEL, CourtType.BASKETBALL),
    location: Joi.string().required().min(3).max(20)
});