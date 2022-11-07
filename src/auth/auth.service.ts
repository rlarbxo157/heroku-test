/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserTest } from 'src/testuser/testuser.entity';
import { User } from 'src/users/user.entity';
import { UsersRepository } from 'src/users/user.repository';
import { Repository } from 'typeorm';
import { LoginRequestDto } from './dto/login-request.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    // 이거 에러뜸. InJectRepository 를 제거해야 됌. 왜지???
    // ->저장소가 수작업(ORM에서 생성되지 않음)인 경우 저장소 주입을 사용할 수 없습니다.
    // https://stackoverflow.com/questions/60777204/typeerror-repository-method-is-not-a-function-nestjs-typeorm <- 참고
    // constructor(@InjectRepository(User) private userRepository: UsersRepository,private jwtService: JwtService){}


    constructor(private userRepository: UsersRepository,
    private jwtService: JwtService
    ){}

    async jwtLogin(data:LoginRequestDto) {
        const {loginEmail, loginPassword} = data;

     
        // console.log(loginEmail);
        // console.log(loginPassword);
        console.log(this.userRepository);
        const user = await this.userRepository.findUsersByEmail(loginEmail);

        
        if(!user) {
            throw new UnauthorizedException("이메일 비밀번호 체크")
        }

        const isPasswordValidated:boolean = await bcrypt.compare(
            loginPassword,
            user.password
        );

        if(!isPasswordValidated) {
            throw new UnauthorizedException('password 를 확인해주세요');
        }
        
        const payload = { email:loginEmail, sub:user.id};
        
        return {
            token: this.jwtService.sign(payload)
        }
    }
}
