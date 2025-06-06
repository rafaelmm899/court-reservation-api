export class UnauthenticatedException extends Error {
    constructor() {
        super('The user is not authenticated');
    }

    toJSON() {
        return {
            code: 'UNAUTHENTICATED',
            message: this.message
        }
    }
}