import {BaseRouter} from './BaseRouter';

export class AuthenticationRouter extends BaseRouter {
  protected _route: string;
  protected override configure(): void {
    this._route = '/auth';
    this._router.post(this._route, (req, res) => {
      res.send('Hello World!');
    });
  }
}
