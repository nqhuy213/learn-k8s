import {injectable} from 'inversify';
import {BaseRouter} from './BaseRouter';

@injectable()
export class TaskRouter extends BaseRouter {
  protected override configure(): void {
    this._router.get('/', (req, res) => {
      res.send('Hello World!');
    });
  };
}
