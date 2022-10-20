/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';
import { PageRequest } from 'src/page/pageRequest';

export class ReadBoardDto extends PageRequest {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}
