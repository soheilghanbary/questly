import { fromNow } from '@/lib/utils';
import type { Job } from '@prisma/client';
import { ClockIcon, ExternalLink, MapPin } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';

const JobCard = ({ title, company, location, description, salary, jobType, logo, website, phone, email, tags, createdAt }: Job) => (
  <div className="relative flex flex-col gap-4 rounded-lg border border-border/40 p-4 shadow-sm">
    <div className="flex items-center gap-4">
      <Image
        width={64}
        height={64}
        quality={100}
        sizes='120px'
        alt={company}
        src={logo}
        className="size-16 rounded-lg"
      />
      <div className="flex flex-col gap-1">
        <h2 className="font-medium">{company} ({title})</h2>
        <div className="flex items-center gap-4">
          <p className="font-medium text-muted-foreground text-xs">
            Salary: {salary} $ / year
          </p>
          <span className="rounded-md bg-amber-50 px-3 py-1.5 font-medium text-amber-500 text-xs">
            {jobType}
          </span>
        </div>
      </div>
    </div>
    <p className="line-clamp-2 text-muted-foreground text-xs/6">{description}</p>
    <div className="flex flex-wrap items-center gap-4">
      <p className="flex items-center gap-1 text-muted-foreground text-xs">
        <MapPin className="size-3.5" />
        {location}
      </p>
      <Separator orientation="vertical" className="h-4" />
      <p className="flex items-center gap-1 text-muted-foreground text-xs">
        <ClockIcon className="size-3.5" />
        {fromNow(createdAt)}
      </p>
      <Separator orientation="vertical" className="h-4" />
      <a
        target="_blank"
        rel="noreferrer"
        href={website}
        className="flex items-center gap-1 font-medium text-primary text-xs"
      >
        <ExternalLink className="size-3.5" />
        {website}
      </a>
    </div>
    <div className="flex items-center gap-2">
      {tags.map((t: any) => (
        <span key={t.id} className="rounded-md bg-muted px-3 py-1.5 font-medium text-foreground/80 text-xs">
          {t.text}
        </span>
      ))}
    </div>
    <Button
      variant={'secondary'}
      className="right-4 bottom-4 lg:absolute lg:w-fit"
    >
      Details
    </Button>
  </div>
);

type JobListProps = {
  jobs: Job[];
};

export function JobList({ jobs }: JobListProps) {
  return (
    <section>
      <h6 className="my-4 text-muted-foreground text-sm">250 jobs results</h6>
      <div className="grid gap-4">
        {jobs.map((job) => (
          <JobCard key={job.id} {...job} />
        ))}
      </div>
    </section>
  );
}
