/* eslint-disable prettier/prettier */
import { Injectable,UploadedFile } from '@nestjs/common';
import { CreateTestuserDto } from './dto/create-testuser.dto';
import { UpdateTestuserDto } from './dto/update-testuser.dto';
import * as XLSX from 'xlsx';
import { UserTest } from './testuser.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TestuserService {
  constructor(@InjectRepository(UserTest) private testuserRepository: Repository<UserTest>){}
  async uploadExcelFileDisk(@UploadedFile() file) {
    const workbook = XLSX.read(file.buffer, {type: 'buffer'});

    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];

    const rows:any = XLSX.utils.sheet_to_json(sheet, {
      defval:null,
    });
  
    for (const row of rows) {
      const testuser = await this.testuserRepository.createQueryBuilder('usertest')
      .insert()
      .into(UserTest)
      .values([
        {name:row.name,age:row.age,phone:row.phone}
      ])
      .execute();
    }
 } 

}
