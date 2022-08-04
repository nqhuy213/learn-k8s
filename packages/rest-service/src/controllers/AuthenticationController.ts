import {Request, Response} from 'express';
import {injectable} from 'inversify';
import {BaseController} from './BaseController';

@injectable()
export class AuthenticationController extends BaseController {
  public async register(req: Request, res: Response): Promise<Response> {
    console.log('first');
    const {name, email, password} = req.body;
    try {
      const user = await this._userRepository.createUser({name, email, passwordHash: password});
      console.log(user);
      return res.status(201).json(user);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  };
  public async login(req: Request, res: Response) {
    const {email, password} = req.body;
    try {
      const user = await this._userRepository.getUserByEmail(email);
      if (!user) {
        return res.status(404).json({message: 'User not found'});
      }
      if (user.passwordHash !== password) {
        return res.status(401).json({message: 'Invalid password'});
      }
      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).json(error);
    }
  };
  public async logout(req: Request, res: Response) {
    res.send('Hello World!');
  };
}
