/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment } from './entities/comment.entity';

@Injectable()
export class CommentService {
  constructor(@InjectRepository(Comment) private commentRepository: Repository<Comment>){}

  async create(createCommentDto: CreateCommentDto) {
    const { commentTitle, commentContent} = createCommentDto;
    const comment = await this.commentRepository.createQueryBuilder('comment')
    .insert()
    .into(Comment)
    .values([
      {
        commentTitle:commentTitle,
        commentContent:commentContent
      }
    ])
    .execute()
    
    return comment;
  }

  findAll() {
    return `This action returns all comment`;
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
