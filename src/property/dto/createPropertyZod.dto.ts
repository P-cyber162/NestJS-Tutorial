import z from 'zod';

export const CreatePropertySchema = z
  .object({
    name: z.string(),
    description: z
      .string()
      .min(5, 'Description should be at least 5 characters'),
    area: z.number().positive(),
  })
  .required();

export type CreatePropertyZodDto = z.infer<typeof CreatePropertySchema>;
