/* eslint-disable prettier/prettier */
import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import {ApiProperty} from '@nestjs/swagger';
import { Comment } from "src/comment/entities/comment.entity";

@Entity("board")
export class Board extends BaseEntity {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id:number;

    @ApiProperty()
    @Column()
    title:string;

    @ApiProperty()
    @Column()
    description:string;

 
    @OneToMany(()=>Comment, (comment)=>comment.board)
    comment: Comment[]

    @ApiProperty()
    @CreateDateColumn({type:"date", default: ()=> "CURRENT_TIMESTAMP(6)"})
    createdAt: Date;

    @ApiProperty()
    @UpdateDateColumn({type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)",onUpdate:"CURRENT_TIMESTAMP(6)"})
    updatedAt: Date;
}