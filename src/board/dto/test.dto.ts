/* eslint-disable prettier/prettier */
import { IsNotEmpty } from "class-validator";
export class TestDto {
    @IsNotEmpty()
    title: string;
  
    @IsNotEmpty()
    description: string;
}