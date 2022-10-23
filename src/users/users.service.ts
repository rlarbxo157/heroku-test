/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException, HttpException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { SignupUserDto } from './dto/create-signup.dto';
import { UserDto } from './dto/user-dto';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepository: Repository<User>){}
  // Repository 를 extends 함으로써 find, save 등등 가능함.

  // async createUser(createUserDto: CreateUserDto): Promise<User | string>  {
  //   const {name,email,nickname,phone, address,password} = createUserDto;
  //   const isNameExist = await this.userRepository.findOneBy({email:email});
  //   if(isNameExist) {
  //     throw new UnauthorizedException(`${name} 는 이미 존재합니다.`)
  //   }

  //   const hashPassword = await bcrypt.hash(password, 10);
  //   const user = this.userRepository.create({
  //     name,
  //     email,
  //     nickname,
  //     phone,
  //     address,
  //     password:hashPassword
  //   })

  //   await this.userRepository.save(user);
  //   return user;
  // }

  findAll() {
    if(!this.userRepository) {
      throw new NotFoundException('user not found');
    }
    console.log(this.userRepository);

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


  async existEmail(email: string):Promise<boolean> {
    const user =await this.userRepository.findOne({where:{email:email}})
      // console.log(user);
      if(user) {
        return false;
      }else {
        return true;
      }
    }


    uploadFileDisk(files:File[]):string[] {
      return ['asd','asd']
    }
  
   async signup(signupUserDto:SignupUserDto) {
      console.log(signupUserDto);
      const {email, password, name, phone, address} = signupUserDto;
      const existEmail = await this.userRepository.findOneBy({email:email});
      if(existEmail) {
        throw new UnauthorizedException(`${name} 는 이미 존재합니다.`)
      }

      const hashPassword = await bcrypt.hash(password, 10);
      const user = this.userRepository.create({
        name,
        email,
        phone,
        address,
        password:hashPassword
      })

      await this.userRepository.save(user);
      return user;
   }

   async signin(data:{email:string, password:string}) {
  

      const {email,password} = data;
      const hashPassword = await bcrypt.hash(password,10);
      try {
        const user = await this.userRepository.findOneBy({email:email});
        const isPasswordMatch = await bcrypt.compare(
          hashPassword,
          user.password
        );

        console.log(hashPassword);
        console.log(user.password);

        console.log(isPasswordMatch)

      } catch (err) {

      }
   }
}
