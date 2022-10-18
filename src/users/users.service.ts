/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDto } from './dto/user-dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepository: Repository<User>){}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const {name,email,nickname,phone, address} = createUserDto;
    const user = this.userRepository.create({
      name,
      email,
      nickname,
      phone,
      address
    })

    await this.userRepository.save(user);
    return user;
  }

  findAll() {
    if(!this.userRepository) {
      throw new NotFoundException('user not found');
    }

    return this.userRepository.find();
  }

  findOne(id: any) :any {
    const user = this.userRepository.findOne({where:{id:id}});
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }


  async existName(name: string):Promise<boolean> {
    const user =await this.userRepository.findOne({where:{name:name}})
      console.log(user);
      if(user) {
        return false;
      }else {
        return true;
      }
    }


    uploadFileDisk(files:File[]):string[] {
      return ['asd','asd']
    }

}
