import * as passport from 'passport';
import * as passportLocal from 'passport-local';
import * as passportJwt from 'passport-jwt';

import { jwtSecret } from '../config';
import { checkUserCredentials, checkUserPayload } from '../queries/users';

const jwtStrategyOptions: passportJwt.StrategyOptions = {
  secretOrKey: jwtSecret,
  jwtFromRequest: passportJwt.ExtractJwt.fromAuthHeader()
};

const jwtStrategy = new passportJwt.Strategy(jwtStrategyOptions, (payload: any, done: any): void => {
  checkUserPayload(payload)
    .then(isMatch => done(null, isMatch))
    .catch(err => done(err));
});

const localStrategy = new passportLocal.Strategy((username: string, password: string, done: any): void => {
  checkUserCredentials(username, password)
    .then(isMatch => {
      if (!isMatch) return done(null, false, { "error": "Invalid Username or Password" });

      done(null, { username: username });
    })
    .catch(err => done(err))
});

passport.use(jwtStrategy);
passport.use(localStrategy);

const jwtAuth = passport.authenticate('jwt', { session: false });
const localAuth = passport.authenticate('local', { session: false });

export { jwtAuth, localAuth };
