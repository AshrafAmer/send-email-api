import { JsonController, Controller, Post, Body } from 'routing-controllers';
import { EmailService } from '../services/EmailService';
import { EmailBodyValidator } from '../validators/EmailBodyValidator';
import { EmailRequestBody } from './requests/EmailRequestBody';

@Controller()
@JsonController('/emails')
export class EmailController {

    private emailService: EmailService;

    constructor() {
        this.emailService = new EmailService();
    }

    @Post('/send')
    public async send(@Body() body: EmailRequestBody): Promise<any> {
        console.log(body);
        const emailBodyValidator = new EmailBodyValidator(body);
        await emailBodyValidator.validate();

        const emails = [...body.to, body.from];
        console.log(emails);
        await this.emailService.validateList(emails);

        await this.emailService.sendList(body);

        return {success: true, message: 'sent successfully'}
    }
}