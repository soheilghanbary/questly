import { AddJobForm } from '@/components/(app)/add-job-form';

export default function NewJob() {
  return (
    <section className='mx-auto max-w-screen-md'>
      <h1 className="mb-6 text-center font-black text-2xl lg:text-3xl">
        Add New Job
      </h1>
      <AddJobForm />
    </section>
  );
}
