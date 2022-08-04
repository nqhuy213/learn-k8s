import {inject, injectable} from 'inversify';
import {IUserRepository} from '../database/repository/UserRepository/IUserRepository';
import {Types} from '../ioc/Types';

@injectable()
export abstract class BaseController {
  constructor(
    @inject(Types.IUserRepository) protected _userRepository: IUserRepository,
  ) {}
}
