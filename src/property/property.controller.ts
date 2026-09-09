import { Body, Controller, Get, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto.js';

@Controller('property')
export class PropertyController {
    @Get()
    findAll() {
        return "All properties";
    }

    @Get(":id")
    findOne(@Param("id", ParseIntPipe) id: Number, @Query("sort", ParseBoolPipe) sort: Boolean) {
        return {
            id: typeof(id),
            sort: typeof(sort),
            date: new Date()
        };
    }

    @Post()
    //@UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    @HttpCode(201)
    create(@Body(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, groups:['create'] })) body: CreatePropertyDto) {
        return {
            message: "Properties created!",
            data: body,
        }
    }

    @Patch(":id")
    update(@Body(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, groups:['update'], always: true })) body: CreatePropertyDto) {
        return body
    }
}
