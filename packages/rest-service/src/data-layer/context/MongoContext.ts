import 'reflect-metadata';
import {injectable} from 'inversify';
import mongoose from 'mongoose';
import {DbContext} from './DbContext';

@injectable()
export class MongoContext extends DbContext {
  public getConnection(uri: string): void {
    mongoose.connect(uri, () => {
      console.log('Connected to MongoDB');
    });
  };
}
