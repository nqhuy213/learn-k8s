import {prop, getModelForClass, modelOptions} from '@typegoose/typegoose';
import validator from 'validator';

@modelOptions({schemaOptions: {timestamps: true}})
export class User {
  @prop({required: true})
  public name!: string;

  @prop({required: true, index: true, unique: true, validate: {
    validator: (value: string) => {
      return validator.isEmail(value);
    },
    message: '{VALUE} is not a valid email',
  }})
  public email!: string;

  @prop({required: true, select: false})
  public passwordHash!: string;
}

export const UserModel = getModelForClass(User);
