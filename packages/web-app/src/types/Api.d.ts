declare type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'
  | 'PATCH' | 'HEAD' | 'OPTIONS' | 'CONNECT' | 'TRACE';

declare interface RestResponseType<P extends object = object> {
  status: 'success' | 'error';
  statusCode: number;
  payload: P;
  message?: string;
}
