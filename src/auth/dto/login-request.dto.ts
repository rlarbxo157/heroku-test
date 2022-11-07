/* eslint-disable prettier/prettier */
import { PickType } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { User } from 'src/users/user.entity';

export class LoginRequestDto extends PickType(User, ['email','password'] as const) {
  @IsNotEmpty()
  loginEmail: string;

  @IsNotEmpty()
  loginPassword: string;
}
