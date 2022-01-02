import { HttpError } from 'routing-controllers';

export class SubjectValidationError extends HttpError {
    constructor() {
        super(400, 'Email subject is required');
    }
}
