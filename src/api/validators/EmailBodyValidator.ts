import { EmailRequestBody } from "../controllers/requests/EmailRequestBody";
import { BodyValidationError } from "../errors/BodyValidationError";
import { ReceiverValidationError } from "../errors/ReceiverValidationError";
import { SenderEmailMissedError } from "../errors/SenderEmailMissedError";
import { SubjectValidationError } from "../errors/SubjectValidationError";


export class EmailBodyValidator {
    private emailBody: EmailRequestBody;

    constructor (body: EmailRequestBody) {
        this.emailBody = body;
    }

    public validate(): void {
        if(!this.emailBody.from){
            throw new SenderEmailMissedError();
        }

        if(!this.emailBody.to.length){
            throw new ReceiverValidationError();
        }

        if(!this.emailBody.subject){
            throw new SubjectValidationError();
        }

        if(!this.emailBody.body){
            throw new BodyValidationError();
        }
    }
}