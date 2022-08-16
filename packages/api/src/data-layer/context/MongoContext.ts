import 'reflect-metadata';
import {injectable} from 'inversify';
import mongoose from 'mongoose';
import {DbContext} from './DbContext';

@injectable()
export class MongoContext extends DbContext {
  public getConnection(uri: string): void {
    const connectWithRetry = () => {
      return mongoose.connect(uri, function(err) {
        if (err) {
          console.error('Failed to connect to mongo on startup - retrying in 5 sec', err);
          setTimeout(connectWithRetry, 5000);
        }
      });
    };
    connectWithRetry();
  };
}
