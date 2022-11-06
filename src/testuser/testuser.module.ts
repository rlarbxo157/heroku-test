/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TestuserService } from './testuser.service';
import { TestuserController } from './testuser.controller';
import { UserTest } from './testuser.entity';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';


@Module({
  imports :[
    TypeOrmModule.forFeature([UserTest])
  ],
  controllers: [TestuserController],
  providers: [TestuserService],
  exports:[TestuserService]
})
export class TestuserModule {}
