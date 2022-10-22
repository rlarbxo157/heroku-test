/* eslint-disable prettier/prettier */
import { Injectable, HttpException } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from './board.entity';
import { Repository } from 'typeorm';
import {
  paginate,
  Pagination,
  IPaginationOptions,
} from 'nestjs-typeorm-paginate';
import { TestDto } from './dto/test.dto';
import { CreateCommentDto } from 'src/comment/dto/create-comment.dto';
import { Comment } from 'src/comment/entities/comment.entity';

@Injectable()
export class BoardService {
  constructor(@InjectRepository(Board) private boardRepository: Repository<Board>,
  @InjectRepository(Comment) private commentRepository: Repository<Comment>
    ){}
  
  // 기존 typeorm repository 함수
  // async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
  //   const {title, description} = createBoardDto;
  //   const board = this.boardRepository.create({
  //     title,
  //     description,
  //   })

  //   await this.boardRepository.save(board);
  //   return board;
  // }

  // querybuilder 사용 함수
  async createBoard(createBoardDto: CreateBoardDto){
    const {title, description} = createBoardDto;
    const board = await this.boardRepository.createQueryBuilder('board')
    .insert()
    .into(Board)
    .values([
      {title:title, description:description}
    ])
    .execute();
    return board;
  }

  async findAll() {
    // return this.boardRepository.find();

    // const qb = await this.boardRepository.createQueryBuilder('user');
    // qb.where('user.nickname = :nickname', {nickname : 'test'})
    // console.log(qb.getOne());

    const board = await this.boardRepository.createQueryBuilder('board')
    .select(['board.id','board.title','board.description','board.createdAt','board.updatedAt'])
    .where('board.title = :title', {title:'asd'})
    .orderBy('id')
    .getRawMany();

    return board;
  }

  async findOne(value: string) {
    console.log(value);

    const board = await this.boardRepository.createQueryBuilder('board')
    .select(['board.id','board.title','board.description','board.createdAt','board.updatedAt'])
    .where('board.id = :id', {id: value})
    .getRawOne();

    if(!board){
       throw new HttpException(`${value} is not defined`,401)
    }
    
    return board ;
  }

  // async createComment(id:number,comment) {
  //   const board = await this.boardRepository.findOne({id,
  //     relations:['comment'],
  //   })

  // }

  update(id: number, updateBoardDto: UpdateBoardDto) {
    return `This action updates a #${id} board`;
  }

  remove(id: number) {
    return `This action removes a #${id} board`;
  }

  test(query: TestDto) {
    console.log(query);
    return 'asd';
  }

  async createComment(id:string, commentData:any) {
    console.log(id)
    const board = await this.boardRepository.findOne({
      where: {
        id:Number(id)
      },
      relations:['comment'],
    })

    console.log(commentData);
    const comment = await this.commentRepository.save(commentData);
    board.comment.push(comment);
 
    return await this.boardRepository.save(board);
  }


  async getComment(id:string) {
    console.log(id);
    const board = await this.boardRepository.findOne({
      where: {
        id: Number(id)
      },
      relations:['comment']
    })

    return {
        boardId:board.id,
        comment:board.comment
    }
  }

}
