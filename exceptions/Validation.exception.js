export class ValidationException extends Error {

    constructor(errors) {
        super("The request contains invalid data");
        this.errors = errors;
    }

    toJSON() {
        return {
            code: 'VALIDATION_ERROR',
            message: this.message,
            errors: this.errors.map(err => ({
                field: err.path.join('.'),
                message: err.message
            }))
        }
    }
}