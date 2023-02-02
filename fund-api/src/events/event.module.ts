import { Global, Module } from '@nestjs/common';
import { AliOssModule} from 'nestjs-ali-oss';
import { Event } from './entities/event.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventServices } from './event.service';
import { EventController } from './event.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { FileEntity } from 'src/files/entities/file.entity';

@Global()
@Module({
    imports: [
        TypeOrmModule.forFeature([Event]),
        TypeOrmModule.forFeature([FileEntity]),
        ConfigModule.forRoot(),
        AliOssModule.registerAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => ({
              region: configService.get('alios.endpoint'),
              accessKeyId: configService.get('alios.accesskeyid'),
              accessKeySecret: configService.get('alios.accesskeyecret'),
              bucket: configService.get('alios.bucketname'),
            }),
          }),
    ],
    controllers: [EventController],
    providers: [EventServices, ConfigService],
    exports: [EventServices, ConfigService],
})
export class EventModule { }
