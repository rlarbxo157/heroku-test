/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import {ApiTags, ApiOperation, ApiCreatedResponse, ApiBody} from '@nestjs/swagger';

@Controller('comment')
@ApiTags('댓글 control Api')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post()
  @ApiBody({type:CreateCommentDto})
  @ApiOperation({summary:'댓글 생성Api.',description:'댓글 생성'})  //summary 는 보이는곳
  create(@Body() createCommentDto: CreateCommentDto) {
    return this.commentService.createComment(createCommentDto);
  }

  @Get(':id')
  @ApiOperation({summary:'댓글 조회',description:'댓글 조회'})  //summary 는 보이는곳
  findAll(@Param('id') id:string) {
    return this.commentService.findComment(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commentService.remove(+id);
  }
}
