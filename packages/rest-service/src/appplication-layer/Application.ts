import 'reflect-metadata';
import {Configuration} from './configuration/Configuration';
import {inject, injectable} from 'inversify';
import {TaskRouter} from './routers/TaskRouter';
import express from 'express';
import morgan from 'morgan';
import {AuthenticationRouter} from './routers/AuthenticationRouter';
import {IDbContext} from '@/data-layer/context/IDbContext';
import {DITypes} from '@/ioc/DITypes';

@injectable()
export class Application {
  private _app: express.Application;

  constructor(
    @inject(TaskRouter) private _taskRouter: TaskRouter,
    @inject(AuthenticationRouter) private _authenticationRouter: AuthenticationRouter,
    @inject(DITypes.IDbContext) private _dbContext: IDbContext,
  ) {
    this._app = express();
    this.setupMiddleware();
    this.setupRoutes();
  }

  private setupMiddleware(): void {
    this._app.use(express.json());
    this._app.use(express.urlencoded({extended: true}));
    this._app.use(morgan('combined'));
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
