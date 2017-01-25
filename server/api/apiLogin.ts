import * as express from "express";
import { genSalt, hash } from 'bcrypt-nodejs';
import { sign } from 'jsonwebtoken';

import { jwtSecret, saltFactor } from '../config';

export function apiLogin(req: express.Request, res: express.Response) {
  const userInfo = req.user;
  const token = sign({username: userInfo.username }, jwtSecret, { expiresIn: 86400 });

  res.status(200).json({
    token: token,
    user: userInfo
  })
}
