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
    @Column()
    email: string;

    @ApiProperty()
    @Column()
    password:string;

    @ApiProperty()
    @Column({nullable:true})
    nickname: string;

    @ApiProperty()
    @Column({nullable:true})
    phone: string;

    @ApiProperty()
    @Column({nullable:true})
    address:string;

    @ApiProperty()
    @CreateDateColumn({type:"date", default: ()=> "CURRENT_TIMESTAMP(6)"})
    createdAt: Date;

    @ApiProperty()
    @UpdateDateColumn({type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)",onUpdate:"CURRENT_TIMESTAMP(6)"})
    updatedAt: Date;

    
}
