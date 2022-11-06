import { PartialType } from '@nestjs/swagger';
import { CreateTestuserDto } from './create-testuser.dto';

export class UpdateTestuserDto extends PartialType(CreateTestuserDto) {}
