import config from 'config';

export class Configuration {
  public static readonly PORT: number = config.get<number>('port');
  public static readonly DATABASE_URI: string = config.get<string>('databaseUri');
}
