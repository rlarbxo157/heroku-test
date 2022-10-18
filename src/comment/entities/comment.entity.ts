/* eslint-disable prettier/prettier */
import {PrimaryGeneratedColumn, Column, } from 'typeorm';
import {ApiProperty} from '@nestjs/swagger';
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
    @Column()
    commentPublic:string
}
