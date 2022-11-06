/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Type } from 'class-transformer';
import { UserTest } from 'src/testuser/testuser.entity';
import { TestuserModule } from 'src/testuser/testuser.module';
import { UserTestRepository } from 'src/testuser/testuser.repository';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt/jwt.strategy';

@Module({
    imports: [
        TypeOrmModule.forFeature([UserTest]),
        PassportModule.register({defaultStrategy:'jwt', session:false}),
        JwtModule.register({
            secret:'secret',
            signOptions: {expiresIn:'1y'},
        }),
    ],
    providers: [AuthService,JwtStrategy]
})
export class AuthModule {}
