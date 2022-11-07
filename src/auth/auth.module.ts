/* eslint-disable prettier/prettier */
import { forwardRef, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Type } from 'class-transformer';
import { UserTest } from 'src/testuser/testuser.entity';
import { TestuserModule } from 'src/testuser/testuser.module';
import { UserTestRepository } from 'src/testuser/testuser.repository';
import { User } from 'src/users/user.entity';
import { UsersRepository } from 'src/users/user.repository';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt/jwt.strategy';

@Module({
    imports: [
        TypeOrmModule.forFeature([User,UserTest, UsersRepository]),
        PassportModule.register({defaultStrategy:'jwt', session:false}),
        JwtModule.register({
            secret:'secret',
            signOptions: {expiresIn:'1y'},
        }),
        forwardRef(()=> UsersModule)
    ],
    providers: [AuthService,JwtStrategy],
    exports:[AuthService]
})
export class AuthModule {}
