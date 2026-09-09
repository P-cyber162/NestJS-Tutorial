import { Module } from '@nestjs/common';
import { PropertyController } from './property.controller.js';

@Module({
  controllers: [PropertyController]
})
export class PropertyModule {}
