import { HttpError } from 'routing-controllers';

export class BodyValidationError extends HttpError {
    constructor() {
        super(400, 'Email body is required');
    }
}
