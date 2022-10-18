/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param,Res, Delete,UseInterceptors,UploadedFile, Query } from '@nestjs/common';
import { FileService } from './file.service';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { ConfigService } from '@nestjs/config';

@Controller('file')
export class FileController {
  constructor(private config:ConfigService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  create(@UploadedFile() file) {
    // console.log(file);
    const path = file.path.replace(this.config.get('ATTACH_SAVE_PATH'), '');

    // console.log(path);
    return {
      fileName: file.originalname,
      savedPath: path.replace(/\\/gi, '/'),
      size: file.size,
    }
  }

  @Get(':path/:name')
    async download(@Res() res: Response | any, @Param('path') path: string, @Param('name') name: string, @Query('fn') fileName) {
        res.download(`${this.config.get('ATTACH_SAVE_PATH')}/${path}/${name}`, fileName);
    }

}
