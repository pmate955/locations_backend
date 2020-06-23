import * as expressJwt from 'express-jwt';

export default () => {
  const secret = process.env.JWT_SECRET || 'ADSAJDJGIREIW3';
  const availableRoutes = [
        "/sessions/new",
        "/locations",
        "/users"
      ];
  return expressJwt({ secret }).unless({
    path: availableRoutes
  });
};

