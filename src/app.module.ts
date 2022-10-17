/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardModule } from './board/board.module';
import { Board } from './board/board.entity';
import { BoardService } from './board/board.service';

@Module({
  imports: [TypeOrmModule.forRoot({
    type:'postgres',
    // url: process.env.DATABASE_URL || 'postgres://uzvklfwfmfjdee:1999096aa6e324144f0a8eb0c5ce2e3cbf7d1d6a6236d3a2700c755a4e0a6d24@ec2-44-210-228-110.compute-1.amazonaws.com:5432/d5nnq0f4tc2eqk',
    ...(process.env.DATABASE_URL ? {url: process.env.DATABASE_URL} : {
        host:'ec2-44-210-228-110.compute-1.amazonaws.com',
        port:5432,
        username:'uzvklfwfmfjdee',
        password:'1999096aa6e324144f0a8eb0c5ce2e3cbf7d1d6a6236d3a2700c755a4e0a6d24',
        database:'d5nnq0f4tc2eqk',
        entities:[]
    }),
    extra: {
      ssl: {
        rejectUnauthorized :  false
      }
    },
    synchronize: true,
    entities: [
      Board
    ]

  }),BoardModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
