import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Event } from "./entities/event.entity";
import { Repository } from "typeorm";
import { CreateEventDto } from "./dto/create.event.dto";
import { EntityCondition } from "src/utils/types/entity-condition.type";


@Injectable()
export class EventServices {
    constructor(
        @InjectRepository(Event)
        private EventRepository: Repository<Event>,
    ) { }

    async create(CreateEventsDto: CreateEventDto) {
        await this.EventRepository.save(
            this.EventRepository.create({
                ...CreateEventsDto,
            }),
        );
        return {
            success: true,
            message: "Event created successfully",
        };
    }

    async findAll() {
        return await this.EventRepository.find();
    }

    async findOne(fields: EntityCondition<Event>) {
        return await this.EventRepository.findOne({
            where: fields,
        });
    }

    async update(id: string, updateEventDto: CreateEventDto) {
        await this.EventRepository.update(id, updateEventDto);
        return {
            success: true,
            message: "Event updated successfully",
        };
    };

    async softDelete(id: string) {
        await this.EventRepository.softDelete(id);
        return {
            success: true,
            message: "Event deleted successfully",
        };
    }
}