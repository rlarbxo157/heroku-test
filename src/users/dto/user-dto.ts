/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';
import {ApiProperty} from '@nestjs/swagger';

export class UserDto {

  @ApiProperty({
    description:'id',
  })
  id: string;

  @ApiProperty({
    description:'유저 이름',
    required:true
  })
  name: string;

  @ApiProperty({
    description:'이메일'
  })
  email: string[];

  @ApiProperty({
    description:'패스워드'
  })
  password: string;

  @ApiProperty({
    description:'닉네임'
  })
  nickname: string;

  @ApiProperty({
    description:'휴대폰 번호'
  })
  phone: string;

  @ApiProperty({
    description:'주소'
  })
  address: string;
}

