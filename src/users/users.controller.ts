/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, Res,Req, Query, DefaultValuePipe, ParseIntPipe, UseInterceptors } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { SignupUserDto } from './dto/create-signup.dto';
import {ApiTags, ApiOperation, ApiCreatedResponse, ApiBody} from '@nestjs/swagger';
import { User } from './user.entity';
import { FileInterceptor } from '@nestjs/platform-express';
import { Bind, UploadedFile } from '@nestjs/common/decorators';
import { HttpStatus } from '@nestjs/common/enums';
import { Request } from 'express';
import { SuccessInterceptor } from 'src/common/interceptors/success.interceptor';
import { JwtService } from '@nestjs/jwt';

@Controller('users')
@ApiTags('유저 control Api')
export class UsersController {
  constructor(private readonly usersService: UsersService, private jwtService:JwtService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  @Bind(UploadedFile())
  uploadFile(files: File[], @Res() res: any) {
    console.log(files);
    res.status(HttpStatus.OK).json({
      success:true,
      data: this.usersService.uploadFileDisk(files)
    })
  }

  // @Post()
  // @ApiBody({type:CreateUserDto})
  // @UseInterceptors(SuccessInterceptor)
  // @ApiOperation({summary:'유저 생성Api.',description:'유저 생성'})  //summary 는 보이는곳
  // @ApiCreatedResponse({description:"유저 생성", type:User})
  // async create(@Body() createUserDto: CreateUserDto) {
  //    return this.usersService.createUser(createUserDto);
  // }

  @Get()
  @ApiOperation({summary:'유저 조회',description:'유저 조회'})  //summary 는 보이는곳
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiOperation({summary:'유저 단일 조회',description:'유저 단일 조회'})
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({summary:'유저 수정',description:'유저 수정'})
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({summary:'유저 삭제',description:'유저 삭제'})
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }

  // @Get('/name/:name')
  // @ApiOperation({summary:'유저 이름 중복검사',description:'유저 이름 중복검사'})
  // existName(@Param('name') name:string){
  //   console.log(name);
  //   return this.usersService.existName(name);
  // }

  @Get('/test/test')
  testName(@Req() req: Request, @Body() Body, @Param() Param, @Query() Query) : string {
    return 'asd';
  }

  // 회원가입
  @Post('register')
  @UseInterceptors(SuccessInterceptor)
  signup(@Body() signupUserDto:SignupUserDto) {
    console.log(signupUserDto);
    return this.usersService.signup(signupUserDto);
  }

  //로그인
  @Post('login')
  @UseInterceptors(SuccessInterceptor)
  signin(@Body() data:{email:string,password:string}) {
    // console.log(password);
    return this.usersService.signin(data);
  }
}
