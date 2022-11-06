/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserTest } from 'src/testuser/testuser.entity';
import { Repository } from 'typeorm';
import { LoginRequestDto } from './dto/login-request.dto';

@Injectable()
export class AuthService {
    constructor(@InjectRepository(UserTest) private testuserRepository: Repository<UserTest>){}

    async jwtLogin(data:LoginRequestDto) {
        return ''
    }       
}
