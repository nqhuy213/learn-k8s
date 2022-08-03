import morgan from 'morgan';
import {Express} from 'express';
const mode = 'common';

export const setupLogger = (app: Express) => {
  app.use(morgan(mode));
};
