import {Application} from '@/appplication-layer/Application';
import {AuthenticationController} from '@/appplication-layer/controllers/AuthenticationController';
import {AuthenticationRouter} from '@/appplication-layer/routers/AuthenticationRouter';
import {TaskRouter} from '@/appplication-layer/routers/TaskRouter';
import {IDbContext} from '@/data-layer/context/IDbContext';
import {MongoContext} from '@/data-layer/context/MongoContext';
import {IUserRepository} from '@/data-layer/repository/UserRepository/IUserRepository';
import {MongoUserRepository} from '@/data-layer/repository/UserRepository/UserRepository';
import {Container} from 'inversify';
import {DITypes} from './DITypes';

export class DIContainer {
  private _container: Container;
  constructor() {
    this._container = new Container();
  }
  public configure = () => {
    this.bindRepositories();
    this.bindControllers();
    this.bindRouters();
    this.bindDbContext();
    this.bindApplication();
  };
  public getContainer = (): Container => {
    return this._container;
  };
  private bindDbContext = () => {
    this._container.bind<IDbContext>(DITypes.IDbContext).to(MongoContext).inSingletonScope();
  };
  private bindApplication = () => {
    this._container.bind<Application>(Application).toSelf().inSingletonScope();
  };
  private bindRouters = () => {
    this._container.bind<TaskRouter>(TaskRouter).toSelf().inSingletonScope();
    this._container.bind<AuthenticationRouter>(AuthenticationRouter).toSelf().inSingletonScope();
  };
  private bindControllers = () => {
    this._container
        .bind<AuthenticationController>(AuthenticationController).toSelf().inSingletonScope();
  };
  private bindRepositories = () => {
    this._container
        .bind<IUserRepository>(DITypes.IUserRepository).to(MongoUserRepository).inSingletonScope();
  };
}
