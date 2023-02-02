import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, SerializeOptions, UploadedFile, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiTags } from "@nestjs/swagger";
import { Roles } from "src/roles/roles.decorator";
import { RoleEnum } from "src/roles/roles.enum";
import { RolesGuard } from "src/roles/roles.guard";
import { EventServices } from "./event.service";
import { CreateEventDto } from "./dto/create.event.dto";
import { AliOssService } from "nestjs-ali-oss";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { FileEntity } from "src/files/entities/file.entity";
import { UseInterceptors } from "@nestjs/common/decorators";
import { FileInterceptor } from "@nestjs/platform-express";
import { UpdateEventDto } from "./dto/update.event.dto";


@ApiTags('Event')
@Controller({
    path: 'event',
})

export class EventController {
    constructor(
        private readonly EventService: EventServices,
        private readonly aliOssService: AliOssService,
        @InjectRepository(FileEntity)
        private readonly FileRespository: Repository<FileEntity>,

    ) { }


    @ApiBearerAuth()
    @Roles(RoleEnum.admin)
    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @SerializeOptions({
        groups: ['admin'],
    })
    @Post()
    @ApiConsumes('multipart/form-data')
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                name: {
                    type: 'string'
                },
                description: {
                    type: 'string'
                },
                file: {
                    type: 'string',
                    format: 'binary',
                },
            },
        },
    })
    @UseInterceptors(FileInterceptor('file'))
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() createEvent: CreateEventDto, @UploadedFile() file: Express.Multer.File) {
        const { originalname, buffer } = file;
        const fileName = `${Date.now()}-${originalname}`;
        const result = await this.aliOssService.put(fileName, buffer);
        // save file to database
        const image = await this.FileRespository.save(
            this.FileRespository.create({
                ...file,
                path: result.url,
            }),
        );
        console.log(image);
        return await this.EventService.create({
            ...createEvent,
            photoId: image.id,
        });
    }


    @Get()
    @HttpCode(HttpStatus.OK)
    async findAll() {
        return await this.EventService.findAll();
    }


    @Get(':id')
    @HttpCode(HttpStatus.OK)
    async findOne(@Param('id') id: string) {
        return await this.EventService.findOne({ id: id });
    }

    @ApiBearerAuth()
    @Roles(RoleEnum.admin)
    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @SerializeOptions({
        groups: ['admin'],
    })
    @Patch(':id')
    @ApiConsumes('multipart/form-data')
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                name: {
                    type: 'string'
                },
                description: {
                    type: 'string'
                },
                file: {
                    type: 'string',
                    format: 'binary',
                },
            },
        },
    })
    @UseInterceptors(FileInterceptor('file'))
    @HttpCode(HttpStatus.OK)
    async update(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto, @UploadedFile() file: Express.Multer.File) {
        const { originalname, buffer } = file;
        const fileName = `${Date.now()}-${originalname}`;
        const result = await this.aliOssService.put(fileName, buffer);
        // save file to database
        const image = await this.FileRespository.save(
            this.FileRespository.create({
                ...file,
                path: result.url,
            }),
        );
        return await this.EventService.update(id, {
            ...updateEventDto,
            photoId: image.id,
        });
    }

    @ApiBearerAuth()
    @Roles(RoleEnum.admin)
    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @SerializeOptions({
        groups: ['admin'],
    })
    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    async remove(@Param('id') id: string) {
        return await this.EventService.softDelete(id);
    }
}