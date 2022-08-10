export class Constants {
  public static readonly apiUrl = process.env.REACT_APP_API_URL;
  public static readonly firebaseApiKey = process.env.REACT_APP_FIREBASE_API_KEY;
  public static readonly firebaseAuthDomain = process.env.REACT_APP_FIREBASE_AUTH_DOMAIN;
  public static readonly firebaseProjectId = process.env.REACT_APP_FIREBASE_PROJECT_ID;
  public static readonly firebaseStorageBucket = process.env.REACT_APP_FIREBASE_STORAGE_BUCKET;
  public static readonly firebaseMessagingSenderId =
    process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID;
  public static readonly firebaseAppId = process.env.REACT_APP_FIREBASE_APP_ID;
}
