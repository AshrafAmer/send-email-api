import 'reflect-metadata';
import { createExpressServer } from 'routing-controllers';
import path from 'path';

const port = process.env.PORT || 3000;
const prefixRoute = process.env.ROUTE_PREFIX || '/api';

const app = createExpressServer({
    cors: true,
    routePrefix: prefixRoute,
    defaultErrorHandler: false,
    controllers: [path.join(__dirname, './src/api/controllers/**/*Controller.ts')],
    middlewares: [path.join(__dirname, './src/api/middleWares/**/*MiddleWare.ts')],
});

app.listen(port, () => {
    console.log('Server running on port: ', port);
});