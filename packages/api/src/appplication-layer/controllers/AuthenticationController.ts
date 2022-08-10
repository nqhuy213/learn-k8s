import {Request, Response} from 'express';
import {injectable} from 'inversify';
import {BaseController} from './BaseController';
import * as firebaseAdmin from 'firebase-admin';
import {FormatResponse} from '../utils/FormatResponse';

@injectable()
export class AuthenticationController extends BaseController {
  public async verify(req: Request, res: Response) {
    const token = req.body.token as string;
    try {
      const decodedToken = await firebaseAdmin.auth().verifyIdToken(token);
      const currentUser = await this.dbContext.userRepository.getUserById(decodedToken.uid);
      if (!currentUser) {
        const newUser = await this.dbContext.userRepository.createUser({
          uid: decodedToken.uid,
          email: decodedToken.email as string,
          name: decodedToken.name,
          photoUrl: decodedToken.picture,
          phoneNumber: decodedToken.phone_number,
          providerId: decodedToken.firebase.sign_in_provider,
        });
        return FormatResponse.SuccessResponse(res, {
          message: 'User created',
          statusCode: 201,
          payload: newUser,
        });
      }
      return FormatResponse.SuccessResponse(res, {
        message: 'User found',
        payload: currentUser,
        statusCode: 200,
      });
    } catch (error) {
      return FormatResponse.ErrorResponse(res, {
        message: (error as any).message,
        statusCode: 401,
      });
    }
  }
  // public async register(req: Request, res: Response): Promise<Response> {
  //   const {name, email, password} = req.body;
  //   try {
  //     const user = await this.dbContext.userRepository.createUser(
  //         {
  //           name,
  //           email,
  //           passwordHash: password,
  //         },
  //     );
  //     return res.status(201).json(user);
  //   } catch (error) {
  //     return res.status(400).json(error);
  //   }
  // };
  // public async login(req: Request, res: Response) {
  //   const {email, password} = req.body;
  //   try {
  //     const user = await this.dbContext.userRepository.getUserByEmail(email);
  //     if (!user) {
  //       return res.status(404).json({message: 'User not found'});
  //     }
  //     if (user.passwordHash !== password) {
  //       return res.status(401).json({message: 'Invalid password'});
  //     }
  //     return res.status(200).json(user);
  //   } catch (error) {
  //     return res.status(400).json(error);
  //   }
  // };
  // public async logout(req: Request, res: Response) {
  //   res.send('Hello World!');
  // };
}
