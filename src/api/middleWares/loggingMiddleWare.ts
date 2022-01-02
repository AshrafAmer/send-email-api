import { Middleware, ExpressMiddlewareInterface } from 'routing-controllers';
import { DateTimeService } from './../services/DateTimeService';

@Middleware({ type: 'before' })
export class loggingMiddleWare implements ExpressMiddlewareInterface {
    
    private dataTimeService: DateTimeService;

    constructor() {
        this.dataTimeService = new DateTimeService();
    }
    
    use(req: any, res: any, next: (err?: any) => any): any {
        const formattedDate = this.dataTimeService.formattedDate();
        const method = req.method;
        const url = req.url;
        const log = `[${formattedDate}] ${method}:${url}`;
        console.log(log);
        next();
    }
}