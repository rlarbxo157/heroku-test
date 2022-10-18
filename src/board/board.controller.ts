/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BoardService } from './board.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import {ApiTags, ApiOperation, ApiCreatedResponse,ApiBody} from '@nestjs/swagger';

@Controller('board')
@ApiTags('게시글 control Api')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Post()
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
  findOne(@Param('id') id: string) {
    return this.boardService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBoardDto: UpdateBoardDto) {
    return this.boardService.update(+id, updateBoardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.boardService.remove(+id);
  }
}
