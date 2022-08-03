import {Application} from './Application';
import {DIContainer} from './ioc/DIContainer';

class Server {
  private _container: DIContainer;
  constructor() {
    this._container = new DIContainer();
  }

  public bootstrap(): void {
    this._container.configure();
    this._container.getContainer().get(Application).start();
  }
}

const server = new Server();
server.bootstrap();
