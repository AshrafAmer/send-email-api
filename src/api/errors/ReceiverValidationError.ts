import { HttpError } from 'routing-controllers';

export class ReceiverValidationError extends HttpError {
    constructor() {
        super(400, 'Email receivers are required');
    }
}
