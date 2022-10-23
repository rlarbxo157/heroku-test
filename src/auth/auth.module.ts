/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt/jwt.strategy';
import { UsersRepository } from 'src/users/user.repository';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    PassportModule.register({defaultStrategy:'jwt',session:true}),
    JwtModule.register({
      secret:'secret',
      signOptions:{expiresIn:'1y'}
    }),
    UsersModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy]
})
export class AuthModule {}
