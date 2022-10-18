/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { FileService } from './file.service';
import { FileController } from './file.controller';
import { MulterModule } from '@nestjs/platform-express';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { diskStorage } from 'multer';
import { format } from 'light-date';
import { extname } from 'path';

import * as fs from 'fs';


@Module({
  imports: [
    MulterModule.registerAsync({
      imports: [ConfigModule.forRoot({
        isGlobal:true
      })],
      useFactory: async (config: ConfigService) => ({
        storage: diskStorage({
          destination: function (req, file,cb) {
            const dest = `${config.get('ATTACH_SAVE_PATH')}/${format(new Date(), '{yyyy}{MM}')}/`;
            console.log(dest);
            if(!fs.existsSync(dest)) {
              fs.mkdirSync(dest, {recursive:true});
            }
            cb(null, dest);
          },
          filename: (req,file,cb) => {
            const randomName = Array(32)
                            .fill(null)
                            .map(() => Math.round(Math.random() * 16).toString(16))
                            .join('');
            return cb(null, `${randomName}${extname(file.originalname)}`);
          }, 
        }),
      }),
      inject: [ConfigService]
    })
  ],
  controllers: [FileController],
  providers: [FileService,ConfigService]
})
export class FileModule {}
