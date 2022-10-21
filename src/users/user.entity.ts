/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import {ApiProperty} from '@nestjs/swagger';
import { Transform } from "class-transformer";

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
    @Column({nullable:true})
    password:string;

    @ApiProperty()
    @Column()
    nickname: string;

    @ApiProperty()
    @Column()
    phone: string;

    @ApiProperty()
    @Column()
    address:string;

    @ApiProperty()
    @CreateDateColumn({type:"date", default: ()=> "CURRENT_TIMESTAMP(6)"})
    createdAt: Date;

    @ApiProperty()
    @UpdateDateColumn({type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)",onUpdate:"CURRENT_TIMESTAMP(6)"})
    updatedAt: Date;

    
}
