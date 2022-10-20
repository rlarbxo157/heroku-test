/* eslint-disable prettier/prettier */
import { InjectRepository } from '@nestjs/typeorm';
import { EntityRepository, Repository } from 'typeorm'
import { Board } from './board.entity';

@EntityRepository(Board)
export class BoardRepository  {
        constructor(@InjectRepository(Board) private readonly boardRepository: Repository<Board>){}
 
}