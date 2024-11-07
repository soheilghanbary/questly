import { AddJobForm } from '@/components/(app)/add-job-form';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function NewJob() {
  return (
    <section className="mx-auto max-w-screen-sm">
      <Link
        href={'/'}
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          'static top-5 left-0 md:absolute',
        )}
      >
        <ArrowLeft />
        Back to Jobs
      </Link>
      <h1 className="my-6 font-black text-2xl lg:text-3xl">Add New Job</h1>
      <AddJobForm />
    </section>
  );
}
