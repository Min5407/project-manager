import { z } from 'zod';

export const formSchema = z.object({
  email: z.string().email('Email is required'),
  name: z.string().min(1, 'Name is required'),
});

export type FormSchemaType = z.infer<typeof formSchema>;
