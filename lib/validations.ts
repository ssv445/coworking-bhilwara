import { z } from 'zod';

export const visitFormSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  phone: z.string().min(10, 'Valid phone number is required'),
  email: z.string().email('Valid email is required'),
  profession: z.string().min(1, 'Profession is required'),
  company: z.string().min(1, 'Company is required'),
  declaration: z.boolean().refine((val) => val === true, {
    message: 'You must accept the declaration'
  })
});

export type VisitFormData = z.infer<typeof visitFormSchema>;