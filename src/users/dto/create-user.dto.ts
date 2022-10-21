/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty } from 'class-validator';
import {ApiProperty} from '@nestjs/swagger';
import { IsNull } from 'typeorm';

export class CreateUserDto {
  @IsNotEmpty()
  @ApiProperty({
    description:'유저 이름',
    required:true
  })
  name: string;

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({
    description:'이메일'
  })
  email: string[];

  @IsNotEmpty()
  password: string
  

  @IsNotEmpty()
  @ApiProperty({
    description:'닉네임'
  })
  nickname: string;

  @ApiProperty({
    description:'휴대폰 번호',

  })
  phone: string;

  @ApiProperty({
    description:'주소'
  })
  address: string;
}

