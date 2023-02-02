import { Global, Module } from '@nestjs/common';
import { AliOssModule, AliOssService } from 'nestjs-ali-oss';
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
            // useFactory: (configService: ConfigService) => ({
            useFactory: () => ({
              // Get from env
            }),
            inject: [ConfigService],
        }),
    ],
    controllers: [EventController],
    providers: [EventServices, AliOssService],
    exports: [EventServices, AliOssService],
})
export class EventModule { }
