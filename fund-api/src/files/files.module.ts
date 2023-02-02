import { ConfigModule } from '@nestjs/config';
// import { AliOssModule } from 'nestjs-ali-oss';
// import { FilesController } from './files.controller';
import { Module } from '@nestjs/common';
import { FileEntity } from './entities/file.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    TypeOrmModule.forFeature([FileEntity]),
    ConfigModule.forRoot(),
    // AliOssModule.registerAsync({
    //   imports: [ConfigModule],
    //   inject: [ConfigService],
    //   useFactory: (configService: ConfigService) => ({
    //     region: configService.get('alios.endpoint'),
    //     accessKeyId: configService.get('alios.accesskeyid'),
    //     accessKeySecret: configService.get('alios.accesskeyecret'),
    //     bucket: configService.get('alios.bucketname'),
    //   }),
    // }),
  ],
  // controllers: [FilesController],
  controllers: [],
  providers: [],
  exports: [],
})
export class FilesModule {}
