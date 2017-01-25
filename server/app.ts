import * as express from 'express';
import * as path from 'path';
import { json, urlencoded } from 'body-parser';

const app: express.Application = express();

app.disable('x-powered-by');

app.use(json());
app.use(urlencoded({ extended: true }));

/** API */
app.use('/api/ping', (req: express.Request, res: express.Response) => res.send("Pong: Server is running..."));


// in production mode run application from dist folder
if (app.get('env') === 'production') {
  app.use(express.static(path.join(__dirname, '/../client')));
}

// catch 404 and forward to error handler
app.use(function (req: express.Request, res: express.Response, next) {
  let err = new Error('Not Found');
  next(err);
});

// production error handler, no stacktrace leaked to user
app.use(function (err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
  res.status(err.status || 500);
  res.json({
    error: {},
    message: err.message
  });
});

export { app }
