/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from './entities/comment.entity';
import { Board } from 'src/board/board.entity';

@Module({
  imports : [
    TypeOrmModule.forFeature([Comment,Board])
  ],
  controllers: [CommentController],
  providers: [CommentService],
})
export class CommentModule {}
