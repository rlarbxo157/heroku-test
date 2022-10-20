/* eslint-disable prettier/prettier */
import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import {ApiProperty} from '@nestjs/swagger';

@Entity("board")
export class Board extends BaseEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    title:string;

    @Column()
    description:string;

    @ApiProperty()
    @CreateDateColumn({type:"date", default: ()=> "CURRENT_TIMESTAMP(6)"})
    createdAt: Date;

    @ApiProperty()
    @UpdateDateColumn({type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)",onUpdate:"CURRENT_TIMESTAMP(6)"})
    updatedAt: Date;
}