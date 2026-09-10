import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto.js';
import { idParamDto } from './dto/idParam.dto.js';
import { ParseIdPipe } from './pipes/parseIdPipes.js';

@Controller('property')
export class PropertyController {
  @Get()
  findAll() {
    return 'All properties';
  }

  @Get(':id')
  findOne(
    @Param('id', ParseIntPipe) id: Number,
    @Query('sort', ParseBoolPipe) sort: Boolean,
  ) {
    return {
      id: typeof id,
      sort: typeof sort,
      date: new Date(),
    };
  }

  @Post()
  //@UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  @HttpCode(201)
  create(
    @Body()
    body: CreatePropertyDto,
  ) {
    return {
      message: 'Properties created!',
      data: body,
    };
  }

  @Patch(':id')
  update(
    @Param('id', ParseIdPipe) id: number,
    @Body()
    body: CreatePropertyDto,
  ) {
    return body;
  }
}
