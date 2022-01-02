import { HttpError } from 'routing-controllers';

export class EmailValidationError extends HttpError {
    constructor() {
        super(400, 'Invalid Email Format');
    }
}
