interface RequestArgs<Body extends object> {
  method: HttpMethod,
  path: string,
  body?: Body,
  params?: URLSearchParams,
  headers?: object
}

export class ApiService {
  private readonly baseUrl: string;
  public constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }
  private async makeHttpRequest<R, Body extends object = object>(
      args: RequestArgs<Body>,
  ): Promise<R> {
    const {method, path, body, params, headers} = args;
    const response = await fetch(this.baseUrl + path + (params ? params : ''), {
      method,
      body: body ? JSON.stringify(body) : undefined,
      headers: new Headers({
        'Content-Type': 'application/json',
        ...headers,
      }),
    });
    const json = await response.json() as R;
    return json;
  }

  public get<R>(path: string, params?: URLSearchParams): Promise<R> {
    return this.makeHttpRequest<R>({
      method: 'GET',
      path,
      params,
    });
  }

  public post<R, Body extends object = object>(path: string, body?: Body): Promise<R> {
    return this.makeHttpRequest<R>({
      method: 'POST',
      path,
      body,
    });
  }
}
