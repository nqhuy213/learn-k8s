import {prop, getModelForClass, modelOptions, index} from '@typegoose/typegoose';
import validator from 'validator';

@index({uid: 1}, {unique: true})
@modelOptions({schemaOptions: {timestamps: true}})
export class User {
  @prop({required: true})
  public name!: string;

  @prop({required: false, unique: true, validate: {
    validator: (value: string) => {
      return validator.isEmail(value);
    },
    message: '{VALUE} is not a valid email',
  }})
  public email!: string;

  @prop({required: true, index: true, unique: true})
  public uid!: string;

  @prop({required: false})
  public photoUrl?: string;

  @prop({required: false})
  public phoneNumber?: string;

  @prop({required: false})
  public providerId?: string;
}

export const UserModel = getModelForClass(User);
