/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment } from './entities/comment.entity';
import { Board } from 'src/board/board.entity';

@Injectable()
export class CommentService {
  constructor(@InjectRepository(Comment) private commentRepository: Repository<Comment>,
  @InjectRepository(Board) private boardRepository: Repository<Board>){}

  async createComment(createCommentDto: CreateCommentDto) {
    const {boardId, commentTitle, commentContent} = createCommentDto;
    console.log(boardId, commentTitle,commentContent)
    const board = await this.boardRepository.findOne({
      where: {
        id:Number(boardId)
      },
      relations:['comment']
    })
    const comment = await this.commentRepository.save(createCommentDto);
    board.comment.push(comment);

    return await this.boardRepository.save(board);
  }

  async findComment(boardId:string) {
    console.log(boardId);
    const comment = await this.commentRepository.find({
      where: {
        boardId:boardId
      }
    });
    return comment;

    // return `This action returns all comment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} comment`;
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    return `This action updates a #${id} comment`;
  }

  remove(id: number) {
    return `This action removes a #${id} comment`;
  }

}
