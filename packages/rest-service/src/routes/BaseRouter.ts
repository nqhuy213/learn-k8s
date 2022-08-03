import express, {Router} from 'express';
import {injectable} from 'inversify';
import {IRouter} from './IRouter';

@injectable()
export abstract class BaseRouter implements IRouter {
  protected abstract _route: string;
  protected _router: express.Router;
  constructor() {
    this._router = Router();
    this.configure();
  }
  protected abstract configure(): void;
  public getRouter(): express.Router {
    return this._router;
  }
}
