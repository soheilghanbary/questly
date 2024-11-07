'use client'
import { type AddJobSchema, jobSchema } from '@/schema';
import { createJob } from '@/server/actions/job.action';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTransition } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { TextField } from '../common/text-field';
import { TextFieldArea } from '../common/text-field-area';
import { Button } from '../ui/button';
import { SelectJobType } from './add-job/select-job-type';
import { SelectSalary } from './add-job/select-salary';
import { TagsField } from './add-job/tags-field';
import { UploadLogo } from './add-job/upload-logo';

export function AddJobForm() {
  const [pending, startTransition] = useTransition();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch
  } = useForm<AddJobSchema>({
    resolver: zodResolver(jobSchema),
    defaultValues: {
      title: 'Frontend',
      company: 'KianErtebat',
      website: 'https://kainet.com',
      location: 'Florence, Italy',
      phone: '09199973120',
      email: 'me@gmail.com',
      jobType: '',
      salary: 0,
      logo: '',
      tags: [],
      description: 'Hi. we are getting a new role for frontend product manager. We are looking for a person with a strong background in frontend development and experience in product management. We are also looking for someone who is passionate about creating innovative and user-friendly products. If you are interested in this role, please apply. We will be happy to provide more information about the position and the company. Thank you for your time and consideration. Best regards, Kian Ertebat',
    }
  });

  const onSubmit = handleSubmit((data) => {
    startTransition(async () => {
      const res = await createJob(data)
      console.log(res);
      toast.success('Job added successfully!');
    });
  });

  return (
    <form onSubmit={onSubmit} className='grid gap-4'>
      <div className='grid grid-cols-2 gap-6'>
        <TextField label='Job Title' {...register('title')} error={errors.title?.message} />
        <TextField label='Company Name' {...register('company')} error={errors.company?.message} />
        <TextField label='Website' {...register('website')} error={errors.website?.message} />
        <TextField label='Location' {...register('location')} error={errors.location?.message} />
        <TextField type='tel' label='Phone' {...register('phone')} error={errors.phone?.message} />
        <TextField label='Email' {...register('email')} error={errors.email?.message} />
        <SelectJobType onChange={e => setValue('jobType', e)} value={watch('jobType')!} />
        <SelectSalary value={Number(watch('salary'))} onChange={e => setValue('salary', e)} />
        <UploadLogo onChange={e => setValue('logo', e)} />
        <TagsField value={watch('tags')} onChange={e => setValue('tags', e)} />
        <TextFieldArea label='Description' rows={6} className='col-span-2' {...register('description')} />
      </div>
      <Button disabled={pending} size={'sm'} className='w-fit'>Save Job</Button>
    </form>
  );
}
