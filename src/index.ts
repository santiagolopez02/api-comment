import 'module-alias/register';
import express, { Express } from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import { MiddlewareService } from '@/domain/interfaces/services';
import { ErrorHandlerService } from '@/infrastructure/services';
import { apiRouter, authRouter } from '@/infrastructure/routes';

const app: Express = express();
let port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const errorHandlerService: MiddlewareService = new ErrorHandlerService();

app.use('/api', apiRouter);
app.use('/auth', authRouter);

app.use('/', errorHandlerService.mediate.bind(errorHandlerService));

const server = http.createServer(app);
server.on('listening', () => {
  console.log(`Server is running on port at ${port}`);
});

server.listen(port);