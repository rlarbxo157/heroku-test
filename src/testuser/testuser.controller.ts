/* eslint-disable prettier/prettier */
import { Controller,Res, Get, Post, Body, Patch, Param, Delete,UseInterceptors } from '@nestjs/common';
import { TestuserService } from './testuser.service';
import { CreateTestuserDto } from './dto/create-testuser.dto';
import { UpdateTestuserDto } from './dto/update-testuser.dto';
import { Bind, UploadedFile } from '@nestjs/common/decorators';
import { FileInterceptor } from '@nestjs/platform-express';
import { HttpStatus } from '@nestjs/common/enums';

@Controller('testuser')
export class TestuserController {
  constructor(private readonly testuserService: TestuserService) {}

 // excel 파일 업로드용
 @Post('uploadExcel')
 @UseInterceptors(FileInterceptor('file'))
 @Bind(UploadedFile())
 uploadExcelFile(files: File[], @Res() res: any) {
   res.status(HttpStatus.OK).json({
     success:true,
     data: this.testuserService.uploadExcelFileDisk(files)
   })
 }
 @Get('upload')
 getList() {
  console.log('asd');
 }

}
