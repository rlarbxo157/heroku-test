/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';
export class CreateUserDto {
  name: string;
  email: string[];
  nickname: string;
  phone: string;
  address: string;
}
