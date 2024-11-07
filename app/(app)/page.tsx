import { FilterJobs } from '@/components/(app)/filter-jobs';
import { Hero } from '@/components/(app)/hero';
import { JobList } from '@/components/(app)/job-list';
import { SearchJobs } from '@/components/(app)/search-jobs';
import { LoadingIcon } from '@/components/common/icons';
import { getJobs } from '@/server/actions/job.action';
import { Suspense } from 'react';

export default async function Home() {
  const jobs = await getJobs();
  return (
    <>
      <Hero />
      <div className="flex gap-4">
        <FilterJobs />
        <main className="flex-1">
          <SearchJobs />
          <Suspense fallback={<LoadingIcon className='mx-auto my-8 size-6' />}>
            <JobList jobs={jobs} />
          </Suspense>
        </main>
      </div>
    </>
  );
}
