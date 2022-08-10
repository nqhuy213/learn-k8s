export class Constants {
  public static readonly firebaseApiKey = process.env.REACT_APP_FIREBASE_API_KEY as string;
  public static readonly firebaseAuthDomain = process.env.REACT_APP_FIREBASE_AUTH_DOMAIN as string;
  public static readonly firebaseProjectId = process.env.REACT_APP_FIREBASE_PROJECT_ID as string;
  public static readonly firebaseStorageBucket =
    process.env.REACT_APP_FIREBASE_STORAGE_BUCKET as string;
  public static readonly firebaseMessagingSenderId =
    process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID as string;
  public static readonly firebaseAppId = process.env.REACT_APP_FIREBASE_APP_ID as string;
}
