export class Configuration {
  public static readonly PORT: string = process.env.PORT as string;
  public static readonly DATABASE_URI: string = process.env.DATABASE_URI as string;
  public static readonly FIREBASE_PROJECT_ID: string = process.env.FIREBASE_PROJECT_ID as string;
  public static readonly FIREBASE_CLIENT_EMAIL: string =
    process.env.FIREBASE_CLIENT_EMAIL as string;
  public static readonly FIREBASE_PRIVATE_KEY: string = process.env.FIREBASE_PRIVATE_KEY as string;
}
