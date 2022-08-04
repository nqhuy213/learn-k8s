import {injectable} from 'inversify';
import {User, UserModel} from '../../models/UserModel';
import {IUserRepository} from './IUserRepository';

@injectable()
export class MongoUserRepository implements IUserRepository {
  public async getUserByEmail(email: string): Promise<User | null> {
    return await UserModel.findOne({email});
  };
  public async createUser(user: User): Promise<User> {
    return await UserModel.create(user);
  };
  // eslint-disable-next-line unused-imports/no-unused-vars
  public async updateUser(user: User): Promise<User> {
    throw new Error('Method not implemented.');
  };
  // eslint-disable-next-line unused-imports/no-unused-vars
  public async deleteUser(user: User): Promise<User> {
    throw new Error('Method not implemented.');
  };
}
