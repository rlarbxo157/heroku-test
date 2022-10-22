/* eslint-disable prettier/prettier */
import { HttpException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { Repository } from 'typeorm';

@Injectable()
export class UsersRepository {
    constructor(@InjectRepository(User) private readonly userRository:Repository<User>) {}

    async existsName(name:string): Promise<boolean> {
        try {
            const result = await this.userRository.findBy({name:name});
            if(result) {
                return true;
            }else{
                return false;
            }
        } catch (err) {
            throw new HttpException('db error',400);
        }
    }
}