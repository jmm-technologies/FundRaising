import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';


export class CreateFileDto {
  @ApiProperty({ example: 'http://jmm-bucket.oss-me-central-1.aliyuncs.com/1675258797992-Screenshot%20(17).png' })
    @IsNotEmpty()
    path : string | null;
}