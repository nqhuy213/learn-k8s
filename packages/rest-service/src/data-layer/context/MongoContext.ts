import 'reflect-metadata';
import {injectable} from 'inversify';
import mongoose from 'mongoose';
import {DbContext} from './DbContext';

@injectable()
export class MongoContext extends DbContext {
  public getConnection(uri: string): void {
    console.log('Connecting to MongoDB...');
    mongoose.connect(uri, (error) => {
      if (error) {
        console.log(error);
        return;
      }
      console.log('Connected to MongoDB');
    });
  };
}
