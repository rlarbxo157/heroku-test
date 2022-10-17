/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name: string;

    @Column({type:'text',array:true})
    email: string[];

    @Column()
    nickname: string;

    @Column()
    phone: string;

    @Column()
    address:string;
}
