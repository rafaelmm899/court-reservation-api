export class NotFoundException extends Error {
    constructor() {
        super("The requested resource does not exist");
    }

    toJSON() {
        return {
            code: 'NOT_FOUND',
            message: this.message
        }
    }
}