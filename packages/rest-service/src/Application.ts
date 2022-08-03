import express from 'express';
import {inject, injectable} from 'inversify';
import {Configuration} from './configuration/Configuration';
import {IDbContext} from './database/context/IDbContext';
import {Types} from './ioc/Types';
import 'reflect-metadata';

@injectable()
export class Application {
  public app: express.Application;
  @inject(Types.IDbContext) private _dbContext: IDbContext;
  constructor() {
    this.app = express();
    this.setupMiddleware();
  }

  private setupMiddleware(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({extended: true}));
  }

  public start(): void {
    this.app.listen(Configuration.PORT, () => {
      console.log(`Server is running on port ${Configuration.PORT}`);
    });
    this._dbContext.getConnection(Configuration.DATABASE_URI);
  }
}
