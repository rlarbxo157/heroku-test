/* eslint-disable prettier/prettier */
import { HttpException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { Repository } from 'typeorm';

@Injectable()
export class UsersRepository {
    constructor(@InjectRepository(User) private readonly userModel:Repository<User>) {}

    async existsName(name:string): Promise<boolean> {
        try {
            const result = await this.userModel.findBy({name:name});
            if(result) {
                return true;
            }else{
                return false;
            }
        } catch (err) {
            throw new HttpException('db error',400);
        }
    }
    
    async findUsersByEmail(email:string):Promise<any> {
        console.log(email);
        const user = await this.userModel.findOneBy({email:email});
        return user;
    }
}