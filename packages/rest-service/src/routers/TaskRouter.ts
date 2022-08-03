import {injectable} from 'inversify';
import 'reflect-metadata';
import {BaseRouter} from './BaseRouter';

@injectable()
export class TaskRouter extends BaseRouter {
  protected _route: string;
  protected override configure(): void {
    this._route = '/task';
    this._router.get(this._route, (req, res) => {
      res.send('Hello World!');
    });
  }
}
