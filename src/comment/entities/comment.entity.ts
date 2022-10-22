/* eslint-disable prettier/prettier */
import {PrimaryGeneratedColumn, Column, ManyToOne, Entity,CreateDateColumn, UpdateDateColumn} from 'typeorm';
import {ApiProperty} from '@nestjs/swagger';
import { Board } from 'src/board/board.entity';

@Entity('comment')
export class Comment {
    @PrimaryGeneratedColumn()
    commentId:number;

    @ApiProperty()
    @Column({nullable:true})
    commentTitle:string;

    @ApiProperty()
    @Column({nullable:true})
    commentContent:string;

    @Column()
    boardId:string;

    @ApiProperty()
    @CreateDateColumn({type:"date", default: ()=> "CURRENT_TIMESTAMP(6)"})
    createdAt: Date;

    @ApiProperty()
    @UpdateDateColumn({type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)",onUpdate:"CURRENT_TIMESTAMP(6)"})
    updatedAt: Date;

    @ManyToOne(()=>Board, (board) => board.comment, {onDelete: 'SET NULL',nullable:true})
    board: Board

}
