export interface IDbContext {
  getConnection(uri: string): void;
}
