import {DITypes} from '@/ioc/DITypes';
import {inject, injectable} from 'inversify';
import {IUserRepository} from '../repository/UserRepository/IUserRepository';
import {IDbContext} from './IDbContext';

@injectable()
export abstract class DbContext implements IDbContext {
  public constructor(
    @inject(DITypes.IUserRepository) public readonly userRepository: IUserRepository,
  ) {}
  public abstract getConnection(uri: string): void
}
