import {User} from '../../models/UserModel';


export interface IUserRepository {
  getUserByEmail(email: string): Promise<User | null>;
  createUser(user: User): Promise<User>;
  updateUser(user: User): Promise<User>;
  deleteUser(user: User): Promise<User>;
}
