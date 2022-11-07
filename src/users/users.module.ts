/* eslint-disable prettier/prettier */
import { forwardRef, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { AuthModule } from 'src/auth/auth.module';
import { UsersRepository } from './user.repository';


@Module({
  imports : [
    TypeOrmModule.forFeature([User]),
    forwardRef(()=>AuthModule)
  ],
  controllers: [UsersController],
  providers: [UsersService,UsersRepository],
  exports: [UsersService,UsersRepository]
})
export class UsersModule {}
