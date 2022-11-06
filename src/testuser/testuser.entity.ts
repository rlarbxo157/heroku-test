/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import {ApiProperty} from '@nestjs/swagger';
import { Transform } from "class-transformer";

@Entity('usertest')
export class UserTest extends BaseEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @ApiProperty()
    @Column()
    name: string;

    @ApiProperty()
    @Column()
    age: string;

    @ApiProperty()
    @Column()
    phone: string;   
}
