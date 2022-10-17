/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import {ApiProperty} from '@nestjs/swagger';

@Entity('user')
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @ApiProperty()
    @Column()
    name: string;

    @ApiProperty()
    @Column({type:'text',array:true})
    email: string[];

    @ApiProperty()
    @Column()
    nickname: string;

    @ApiProperty()
    @Column()
    phone: string;

    @ApiProperty()
    @Column()
    address:string;
}
