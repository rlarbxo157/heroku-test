/* eslint-disable prettier/prettier */
import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, Unique } from "typeorm";
import {ApiProperty} from '@nestjs/swagger';
import { Comment } from "src/comment/entities/comment.entity";

@Entity("board")
@Unique(["id"])
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

    @ApiProperty()
    // @Column({type:'text',array:true,nullable:true})
    @OneToMany(()=>Comment, (comment)=>comment.board, {nullable:true})
    comment: Comment[]

    @ApiProperty()
    @CreateDateColumn({type:"date", default: ()=> "CURRENT_TIMESTAMP(6)"})
    createdAt: Date;

    @ApiProperty()
    @UpdateDateColumn({type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)",onUpdate:"CURRENT_TIMESTAMP(6)"})
    updatedAt: Date;
}