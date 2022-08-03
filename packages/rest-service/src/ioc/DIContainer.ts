import {Container} from 'inversify';
import {Application} from '../Application';
import {IDbContext} from '../database/context/IDbContext';
import {MongoContext} from '../database/context/MongoContext';
import {Types} from './Types';

export class DIContainer {
  private _container: Container;
  constructor() {
    this._container = new Container();
  }
  public configure() {
    this.bindDbContext();
    this.bindApplication();
  }
  public getContainer(): Container {
    return this._container;
  }
  private bindDbContext() {
    this._container.bind<IDbContext>(Types.IDbContext).to(MongoContext).inSingletonScope();
  }
  private bindApplication() {
    this._container.bind<Application>(Application).toSelf().inSingletonScope();
  }
}
