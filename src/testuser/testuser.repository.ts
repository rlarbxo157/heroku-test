/* eslint-disable prettier/prettier */
import { InjectRepository } from '@nestjs/typeorm';
import { EntityRepository, Repository } from 'typeorm'
import { UserTest } from './testuser.entity';

@EntityRepository(UserTest)
export class UserTestRepository  {
        constructor(@InjectRepository(UserTest) private readonly boardRepository: Repository<UserTest>){}
 
}