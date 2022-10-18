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
    return this.commentService.create(createCommentDto);
  }

  @Get()
  @ApiOperation({summary:'댓글 조회',description:'댓글 조회'})  //summary 는 보이는곳
  findAll() {
    return this.commentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCommentDto: UpdateCommentDto) {
    return this.commentService.update(+id, updateCommentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commentService.remove(+id);
  }
}
