import {ApiService} from './ApiService';

export class AuthenticationService {
  private readonly apiService: ApiService;
  public constructor() {
    this.apiService = new ApiService();
  }
  public async verifyUserIdToken(token: string): Promise<RestResponseType<User>> {
    const response = await this.apiService.post<RestResponseType<User>, {token: string}>(
        '/auth/verify',
        {
          token,
        },
    );
    return response;
  }
}
