/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, Res, Query, DefaultValuePipe, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {ApiTags, ApiOperation, ApiCreatedResponse, ApiBody} from '@nestjs/swagger';
import { User } from './user.entity';

@Controller('users')
@ApiTags('유저 control Api')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiBody({type:CreateUserDto})
  @ApiOperation({summary:'유저 생성Api.',description:'유저 생성'})  //summary 는 보이는곳
  @ApiCreatedResponse({description:"유저 생성", type:User})
  async create(@Body() createUserDto: CreateUserDto) {

     const result = await this.existName(createUserDto.name);
     
     if(!result) {
        return {
          message:'데이터 존재',
          ok : false
        }
     }

     return this.usersService.createUser(createUserDto);
    
  }

  @Get()
  @ApiOperation({summary:'유저 조회',description:'유저 조회'})  //summary 는 보이는곳
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }

  @Get('/name/:name')
  existName(@Param('name') name:string){
    console.log(name);
    return this.usersService.existName(name);
  }
}
