import * as express from 'express'

import { localAuth, jwtAuth } from '../middlewares/passport';

import { apiLogin } from './apiLogin';
import { apiGetUserProfile } from './apiGetUserProfile';

export function initRestApi(app: express.Application) {

    app.route('/api/ping').get((req: express.Request, res: express.Response) => res.send("Pong: Server is running..."));

    app.route('/api/login').post(localAuth, apiLogin);

    app.route('/api/users/profile').get(jwtAuth, apiGetUserProfile);

}
