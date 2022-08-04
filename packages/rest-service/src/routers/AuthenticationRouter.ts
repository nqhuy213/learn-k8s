import {injectable} from 'inversify';
import {BaseRouter} from './BaseRouter';

@injectable()
export class AuthenticationRouter extends BaseRouter {
  protected override configure() : void {
    this._router.post(`/login`,
        this._authenticationController.login.bind(this._authenticationController));
    this._router.post(`/register`,
        this._authenticationController.register.bind(this._authenticationController));
    this._router.post(`/logout`,
        this._authenticationController.logout.bind(this._authenticationController));
  };
}
