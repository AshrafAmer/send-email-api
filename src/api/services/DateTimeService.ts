import { Service } from 'typedi';

@Service()
export class DateTimeService {

    public formattedDate(): string {
        const currentDateTime = new Date();
        const formattedDate = currentDateTime.getFullYear() +
            "-" +
            (currentDateTime.getMonth() + 1) +
            "-" +
            currentDateTime.getDate() +
            " " +
            currentDateTime.getHours() +
            ":" +
            currentDateTime.getMinutes() +
            ":" +
            currentDateTime.getSeconds();
        
        return formattedDate;
    }
}