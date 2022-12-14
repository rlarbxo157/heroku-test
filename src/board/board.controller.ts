/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, Query,HttpCode,Header, HttpException, UseFilters, UseInterceptors } from '@nestjs/common';
import { BoardService } from './board.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { ReadBoardDto } from './dto/read-board.dto';
import {ApiTags, ApiOperation, ApiCreatedResponse,ApiBody} from '@nestjs/swagger';
import { TestDto } from './dto/test.dto';
import { HttpExceptionFilter } from 'src/http-exception.filter';
import { SuccessInterceptor } from 'src/common/interceptors/success.interceptor';
import { FailInterceptor } from 'src/common/interceptors/fail.interceptor';
import { CreateCommentDto } from 'src/comment/dto/create-comment.dto';

@Controller('board')
@ApiTags('게시글 control Api')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Post()
  @HttpCode(204)
  @Header('Cache-Control', 'none')
  @ApiBody({type:CreateBoardDto})
  @ApiOperation({summary:'게시글 생성Api.',description:'게시글 생성'})  //summary 는 보이는곳
  createBoard(@Body() createBoardDto: CreateBoardDto) :Promise<any> {
    return this.boardService.createBoard(createBoardDto);
  }

  @Get()
  @ApiOperation({summary:'게시글 조회',description:'게시글 조회'})  //summary 는 보이는곳
  findAll() {
    return this.boardService.findAll();
  }

  @Get(':id')
  @UseFilters(HttpExceptionFilter)
  @UseInterceptors(SuccessInterceptor)
  @UseInterceptors(FailInterceptor)
  findOne(@Param('id') id: string) {
    // if(!id)
    // custom error 리턴
    // throw new HttpException('id is not defined',401)

    // console.log('hello');

    return this.boardService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBoardDto: UpdateBoardDto) {
    return this.boardService.update(+id, updateBoardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.boardService.remove(+id);
  }

  @Get('/test')
  test(@Query() query:TestDto) {
    return this.boardService.test(query);
  }

  @Patch('comment/:id')
  createComment(@Param('id') boardId:string, @Body() commentData:CreateCommentDto) {
    return this.boardService.createComment(boardId,commentData);
  }

  
  @Get('/relation/comment/:id')
  @UseFilters(HttpExceptionFilter)
  @UseInterceptors(SuccessInterceptor)
  getComment(@Param('id') boardId:string) {
    return this.boardService.getComment(boardId);
  }
}
