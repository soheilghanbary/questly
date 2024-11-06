import { FilterJobs } from "@/components/(app)/filter-jobs";
import { Hero } from "@/components/(app)/hero";
import { JobList } from "@/components/(app)/job-list";
import { SearchJobs } from "@/components/(app)/search-jobs";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="flex gap-4">
        <FilterJobs />
        <main className="flex-1">
          <SearchJobs />
          <JobList />
        </main>
      </div>
    </>
  );
}