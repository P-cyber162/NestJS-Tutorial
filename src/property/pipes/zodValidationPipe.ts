import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { ZodType } from 'zod';

export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodType) {}

  transform(value: string, metadata: ArgumentMetadata) {
    const parsedValue = this.schema.safeParse(value);
    if (parsedValue.success) return parsedValue.data;

    throw new BadRequestException(parsedValue.error.format());
  }
}
