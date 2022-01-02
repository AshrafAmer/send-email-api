import { IsNotEmpty, IsEmail } from 'class-validator';

export class EmailRequestBody {
    @IsNotEmpty()
    @IsEmail()
    public from: string ;

    @IsNotEmpty()
    public to: string[];

    @IsNotEmpty()
    public subject: string;

    @IsNotEmpty()
    public body: string;
}
