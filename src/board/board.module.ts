/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { BoardService } from './board.service';
import { BoardController } from './board.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Board } from './board.entity';
import { Comment } from 'src/comment/entities/comment.entity';

@Module({
  imports : [
    TypeOrmModule.forFeature([Board,Comment])
  ],
  controllers: [BoardController],
  providers: [BoardService],
})
export class BoardModule {}
