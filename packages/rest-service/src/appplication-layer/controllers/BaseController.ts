import {IUserRepository} from '@/database/repository/UserRepository/IUserRepository';
import {DITypes} from '@/ioc/DITypes';
import {inject, injectable} from 'inversify';

@injectable()
export abstract class BaseController {
  constructor(
    @inject(DITypes.IUserRepository) protected _userRepository: IUserRepository,
  ) {}
}
