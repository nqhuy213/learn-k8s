import {Response} from 'express';

interface FormatArgs {
  message: string;
  payload?: object;
  statusCode: number;
}

export class FormatResponse {
  public static SuccessResponse(response: Response, args: FormatArgs) {
    return response.status(args.statusCode).json(
        {
          status: 'success',
          message: args.message,
          payload: args.payload,
          statusCode: args.statusCode,
        },
    );
  }

  public static ErrorResponse(response: Response, args: FormatArgs) {
    return response.status(args.statusCode).json(
        {
          status: 'error',
          message: args.message,
          payload: args.payload,
          statusCode: args.statusCode,
        },
    );
  }
}
