import {ValidationException} from "../exceptions/validation.exception.js";

export function exceptionHandler(error, req, res, next) {
    if (error instanceof ValidationException) {
        return res.status(400).json(error.toJSON());
    }

    return res.status(500).json({
        code: 'SERVER_ERROR',
        message: 'An error occurred on the server'
    });

}