import {ValidationException} from "../exceptions/Validation.exception.js";
import {NotFoundException} from "../exceptions/NotFound.exception.js";
import {UnauthenticatedException} from "../exceptions/Unauthenticated.exception.js";

export function exceptionHandlerMiddleware(error, req, res, next) {
    if (error instanceof ValidationException) {
        return res.status(400).json(error.toJSON());
    }

    if (error instanceof NotFoundException){
        return res.status(404).json(error.toJSON());
    }

    if (error instanceof UnauthenticatedException) {
        return res.status(401).json(error.toJSON());
    }

    return res.status(500).json({
        code: 'SERVER_ERROR',
        message: 'An error occurred on the server',
        trace: error.stack
    });

}