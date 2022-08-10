import express, {Router} from 'express';
import {inject, injectable} from 'inversify';
import {AuthenticationController} from '../controllers/AuthenticationController';
import {IRouter} from './IRouter';

@injectable()
export abstract class BaseRouter implements IRouter {
  protected _router: express.Router;
  constructor(
    @inject(AuthenticationController) protected _authenticationController: AuthenticationController,
  ) {
    this._router = Router();
    this.configure();
  }
  protected abstract configure(): void;
  public getRouter(): express.Router {
    return this._router;
  };
}
