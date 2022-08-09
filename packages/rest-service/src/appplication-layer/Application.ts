import 'reflect-metadata';
import {Configuration} from './configuration/Configuration';
import {inject, injectable} from 'inversify';
import {TaskRouter} from './routers/TaskRouter';
import express from 'express';
import morgan from 'morgan';
import {AuthenticationRouter} from './routers/AuthenticationRouter';
import {DbContext} from '@/data-layer/context/DbContext';
import * as firebaseAdmin from 'firebase-admin';
import cors from 'cors';
import * as dotenv from 'dotenv';

if (process.env.NODE_ENV === 'development') {
  dotenv.config();
}

@injectable()
export class Application {
  private _app: express.Application;

  constructor(
    @inject(TaskRouter) private _taskRouter: TaskRouter,
    @inject(AuthenticationRouter) private _authenticationRouter: AuthenticationRouter,
    @inject(DbContext) private _dbContext: DbContext,
  ) {
    this._app = express();
    this.setupFirebase();
    this.setupMiddleware();
    this.setupRoutes();
  }

  private setupFirebase(): void {
    firebaseAdmin.initializeApp({
      credential: firebaseAdmin.credential.cert({
        projectId: Configuration.FIREBASE_PROJECT_ID,
        clientEmail: Configuration.FIREBASE_CLIENT_EMAIL,
        privateKey: Configuration.FIREBASE_PRIVATE_KEY,
      }),
    });
    console.log('Firebase is initialized');
  }

  private setupMiddleware(): void {
    this._app.use(express.json());
    this._app.use(express.urlencoded({extended: true}));
    this._app.use(morgan('dev'));
    this._app.use(cors({
      origin: '*',
    }));
    this._app.use(async (_req, res, next) => {
      res.header('Access-Control-Allow-Credentials', 'true');
      res.header(
          'Access-Control-Allow-Headers',
          'Origin, X-Requested-With, Content-Type, Accept, authorization',
      );
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,PUT,OPTIONS');
      res.header('Access-Control-Allow-Origin', '*');
      next();
    });
  };

  private setupRoutes(): void {
    this._app.use('/auth', this._authenticationRouter.getRouter());
    this._app.use('/task', this._taskRouter.getRouter());
  };

  public start(): void {
    this._app.listen(Configuration.PORT, () => {
      console.log(`Server is running on port ${Configuration.PORT}`);
    });
    this._dbContext.getConnection(Configuration.DATABASE_URI);
  };
}
