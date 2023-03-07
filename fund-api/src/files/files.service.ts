import { Injectable } from '@nestjs/common';
import { AliOssService } from 'nestjs-ali-oss';
import { Repository } from 'typeorm';
import { FileEntity } from './entities/file.entity';

@Injectable()
export class FilesService {
  constructor(
    private readonly aliOssService: AliOssService,
    private readonly FileRespository: Repository<FileEntity>,
  ) { }
// upload file to ali oss
  async uploadFile(file: any) {
    const result = await this.aliOssService.put(file.originalname, file.buffer);
    // save file to database
    await this.FileRespository.save(
      this.FileRespository.create({
        ...file,
        url: result.url,
      }),
    );
  }

  async DeleteFile(file: any) {
    await this.aliOssService.delete(file.originalname);
    await this.FileRespository.delete(file.id);
  }
  
}