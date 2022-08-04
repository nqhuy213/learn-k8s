import {injectable} from 'inversify';
import mongoose from 'mongoose';
import {IDbContext} from './IDbContext';
import 'reflect-metadata';


@injectable()
export class MongoContext implements IDbContext {
  public getConnection(uri: string): void {
    mongoose.connect(uri, () => {
      console.log('Connected to MongoDB');
    });
  };
}
