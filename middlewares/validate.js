import {ValidationException} from "../exceptions/validation.exception.js";

export function validate(schema, property = 'body') {
    return (req, res, next) => {
        const { error } = schema.validate(req[property], { abortEarly: false });
        if (error) {
            throw new ValidationException(error);
        }
        next();
    }
}