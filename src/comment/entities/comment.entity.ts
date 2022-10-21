/* eslint-disable prettier/prettier */
import {PrimaryGeneratedColumn, Column, ManyToOne, Entity,CreateDateColumn, UpdateDateColumn} from 'typeorm';
import {ApiProperty} from '@nestjs/swagger';
import { Board } from 'src/board/board.entity';

@Entity('comment')
export class Comment {
    @PrimaryGeneratedColumn()
    commentId:number;

    @ApiProperty()
    @Column()
    commentTitle:string;

    @ApiProperty()
    @Column()
    commentContent:string;

    @ApiProperty()
    @CreateDateColumn({type:"date", default: ()=> "CURRENT_TIMESTAMP(6)"})
    createdAt: Date;

    @ApiProperty()
    @UpdateDateColumn({type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)",onUpdate:"CURRENT_TIMESTAMP(6)"})
    updatedAt: Date;

    @ManyToOne(()=>Board, (board) => board.comment, {onDelete: 'SET NULL'})
    board: Board

}
