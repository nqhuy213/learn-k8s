import config from 'config';

export class Configuration {
  public static readonly PORT: number = config.get<number>('port');
  public static readonly DATABASE_URI: string = config.get<string>('databaseUri');
  public static readonly FIREBASE_PROJECT_ID: string = config.get<string>('firebaseProjectId');
  public static readonly FIREBASE_CLIENT_EMAIL: string = config.get<string>('firebaseClientEmail');
  public static readonly FIREBASE_PRIVATE_KEY: string = config.get<string>('firebasePrivateKey');
}
