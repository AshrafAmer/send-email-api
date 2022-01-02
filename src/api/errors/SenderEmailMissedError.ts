import { HttpError } from 'routing-controllers';

export class SenderEmailMissedError extends HttpError {
    constructor() {
        super(400, 'Sender email is required');
    }
}
