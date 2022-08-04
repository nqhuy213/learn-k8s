import 'reflect-metadata';
import {Configuration} from './configuration/Configuration';
import {IDbContext} from './database/context/IDbContext';
import {inject, injectable} from 'inversify';
import {TaskRouter} from './routers/TaskRouter';
import express from 'express';
import morgan from 'morgan';
import {MongoContext} from './database/context/MongoContext';
import passport from 'passport';

@injectable()
export class Application {
  private _app: express.Application;

  constructor(
    @inject(TaskRouter) private _taskRouter: TaskRouter,
    @inject(MongoContext) private _dbContext: IDbContext,
  ) {
    this._app = express();
    this.setupMiddleware();
    this.setupRoutes();
  }

  private setupMiddleware(): void {
    this._app.use(express.json());
    this._app.use(express.urlencoded({extended: true}));
    this._app.use(morgan('combined'));
    this._app.use(passport.initialize());
  }

  private setupRoutes(): void {
    this._app.use(this._taskRouter.getRouter());
  }

  public start(): void {
    this._app.listen(Configuration.PORT, () => {
      console.log(`Server is running on port ${Configuration.PORT}`);
    });
    this._dbContext.getConnection(Configuration.DATABASE_URI);
  }
}
