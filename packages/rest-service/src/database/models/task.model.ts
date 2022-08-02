import { prop, getModelForClass, modelOptions, Severity } from '@typegoose/typegoose';
import { Mixed } from 'mongoose';
import { TaskType } from '../../types/task';

@modelOptions({ options: { allowMixed: Severity.ALLOW } })
export class Task {
  @prop({ required: true, unique: true })
  public name!: string;

  @prop({ required: true, type: String, enum: TaskType })
  public type!: TaskType;

  @prop({ required: true })
  public when!: Date;

  @prop({ required: true })
  public payload!: Mixed;
}

export const TaskModel = getModelForClass(Task);
