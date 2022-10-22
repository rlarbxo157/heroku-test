/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from 'class-validator';
export class CreateCommentDto {
    @IsNotEmpty()
    @IsString()
    readonly boardId: string;

    @IsNotEmpty()
    commentTitle: string;

    @IsNotEmpty()
    commentContent: string;
}
