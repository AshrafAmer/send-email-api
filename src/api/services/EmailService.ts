import { Service } from 'typedi';
import { setApiKey, send } from '@sendgrid/mail';
import { EmailValidationError } from '../errors/EmailValidationError';
import { emailRegex } from '../validators/EmailRegex'
import { EmailRequestBody } from '../controllers/requests/EmailRequestBody';
@Service()
export class EmailService {

    constructor() {
        setApiKey(process.env.SENDGRID_API_KEY);
    }

    public sendEmail(from: string, to: string, subject: string, message: string): Promise<any> {
        const msg = {
            to,
            from,
            subject,
            text: message
        };

        return send(msg);
    }

    public validate(email: string): boolean {
        if(!email) {
            return false;
        }

        return emailRegex.test(email);
    }

    public validateList(emails: string[]): void {
        emails.forEach(email => {
            if ( !this.validate(email) ) {
                throw new EmailValidationError();
            }
        });
    }

    public async sendList(request: EmailRequestBody) {
        request.to.forEach(async (email) => {
            await this.sendEmail(request.from, email, request.subject, request.body);
        });
    }
}
