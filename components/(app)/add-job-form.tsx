'use client'
import { type AddJobSchema, jobSchema } from '@/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  TagInput
} from 'emblor';
import { useForm } from 'react-hook-form';
import { TextField } from '../common/text-field';
import { TextFieldArea } from '../common/text-field-area';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { SelectSalary } from './add-job/select-salary';
import { TagsField } from './add-job/tags-field';

export function AddJobForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch
  } = useForm<AddJobSchema>({
    resolver: zodResolver(jobSchema),
    defaultValues: {
      tags: []
    }
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return <form onSubmit={onSubmit} className='grid gap-4'>
    <div className='grid grid-cols-3 gap-6'>
      <TextField label='Job Title' {...register('title')} />
      <TextField label='Company Name' {...register('company')} />
      <TextField label='Website' {...register('website')} />
      <TextField label='Location' {...register('location')} />
      <TextField type='tel' label='Phone' {...register('phone')} />
      <TextField label='Email' {...register('email')} />
      <TextField label='Job Type' {...register('email')} />
      <SelectSalary value={Number(watch('salary'))} onChange={e => setValue('salary', e)} />
      <TextField label='Logo' {...register('logo')} />
      <TagsField value={watch('tags')} onChange={e => setValue('tags', e)} />
      <TextFieldArea label='Description' rows={6} className='col-span-3' />
    </div>
    <Button size={'sm'} className='w-fit'>Save Job</Button>
  </form>;
}
