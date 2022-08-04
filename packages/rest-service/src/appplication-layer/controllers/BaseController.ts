import {DbContext} from '@/data-layer/context/DbContext';
import {inject, injectable} from 'inversify';

@injectable()
export abstract class BaseController {
  constructor(
    @inject(DbContext) protected dbContext: DbContext,
  ) {}
}
