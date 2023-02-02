import { ConfigModule, ConfigService } from '@nestjs/config';
import { AliOssModule } from 'nestjs-ali-oss';
// import { AliOssService } from 'nestjs-ali-oss';
// import { FilesService } from './files.service';
import { FilesController } from './files.controller';
import { Module } from '@nestjs/common';
import { FileEntity } from './entities/file.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    TypeOrmModule.forFeature([FileEntity]),
    ConfigModule.forRoot(),
    AliOssModule.registerAsync({
      imports: [ConfigModule],
      // useFactory: (configService: ConfigService) => ({
      useFactory: () => ({
      
        region: configService.get('end.point'),
        accessKeyId: configService.get('access.key'),
        accessKeySecret: configService.get('access.secret'),
        bucket: configService.get('bucket.name'),
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [FilesController],
  // providers: [FilesService,  ConfigService],
  // exports: [FilesService, AliOssService],
  providers: [],
  exports: [],
})
export class FilesModule {}
