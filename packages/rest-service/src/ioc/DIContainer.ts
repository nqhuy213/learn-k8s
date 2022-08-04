import {Container} from 'inversify';
import {Application} from '../Application';
import {AuthenticationController} from '../controllers/AuthenticationController';
import {IDbContext} from '../database/context/IDbContext';
import {MongoContext} from '../database/context/MongoContext';
import {IUserRepository} from '../database/repository/UserRepository/IUserRepository';
import {MongoUserRepository} from '../database/repository/UserRepository/UserRepository';
import {AuthenticationRouter} from '../routers/AuthenticationRouter';
import {TaskRouter} from '../routers/TaskRouter';
import {Types} from './Types';


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
    this._container.bind<IDbContext>(Types.IDbContext).to(MongoContext).inSingletonScope();
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
        .bind<IUserRepository>(Types.IUserRepository).to(MongoUserRepository).inSingletonScope();
  };
}
