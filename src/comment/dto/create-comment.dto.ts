/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';
export class CreateCommentDto {
    @IsNotEmpty()
    boardId: string;

    @IsNotEmpty()
    commentTitle: string;

    @IsNotEmpty()
    commentContent: string;
}
