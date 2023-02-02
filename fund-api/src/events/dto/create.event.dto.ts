import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, Validate } from 'class-validator';
import { FileEntity } from 'src/files/entities/file.entity';
import { IsExist } from 'src/utils/validators/is-exists.validator';


export class CreateEventDto {
  @ApiProperty({ example: 'demo event' })
    @IsNotEmpty()
    name: string | null;

    @ApiProperty({ example: 'demo event description' })
    @IsNotEmpty()
    description: string | null;

    @ApiProperty({ type: () => FileEntity })
    @IsOptional()
    @Validate(IsExist, ['FileEntity', 'id'], {
      message: 'imageNotExists',
    })
    photoId?: string | null;
}