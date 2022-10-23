import { Injectable } from '@nestjs/common';
import { UsersRepository } from 'src/users/user.repository';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Injectable()
export class AuthService {
    constructor (private readonly usersRepository:UsersRepository) {}

}
