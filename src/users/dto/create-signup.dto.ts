/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class SignupUserDto {
    @IsNotEmpty()
    email:string;

    @IsNotEmpty()
    password:string;
    
    name:string;

    phone:string;

    address:string;
}
