import { z } from 'zod';

const jobSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters long.'),
  description: z
    .string()
    .min(20, 'Description must be at least 20 characters long.'),
  company: z.string().min(2, 'Company name must be at least 2 characters.'),
  logo: z.string().url('Logo must be a valid URL.').optional(), // Optional URL for the company logo
  location: z.string().min(2, 'Location must be at least 2 characters.'),
  salary: z.number().positive('Salary must be a positive number.').optional(),
  jobType: z.enum(['Full-time', 'Part-time', 'Contract', 'Temporary']),
  website: z.string().url('Website must be a valid URL.').optional(), // Replaces applicationLink with website
  phone: z
    .string()
    .regex(/^(\+?\d{1,3}[-.\s]?)?\d{10}$/, 'Phone must be a valid number.')
    .optional(),
  email: z.string().email('Email must be a valid email address.'),
  tags: z.array(
    z.object({
      id: z.string(),
      text: z.string(),
    }),
  ),
});

export type AddJobSchema = z.infer<typeof jobSchema>;

export { jobSchema };
