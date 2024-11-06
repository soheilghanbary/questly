import { Banknote, ClockIcon, MapPin } from 'lucide-react';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';

const JobCard = () => (
  <div className="relative flex flex-col gap-4 rounded-lg border border-border/40 p-4 shadow-sm">
    <div className="flex items-center gap-4">
      <img
        className="size-16 rounded-lg"
        alt="company name"
        src="https://thumb2.jobinjacdn.com/j7nQQR3Rbs6CDVyKOyilAX4bcMI=/fit-in/128x128/filters:strip_exif():fill(transparent):quality(100)/https://mstorage2.jobinjacdn.com/other/files/uploads/images/9e47b404-c38f-43f7-b6b1-0b2e1ecdf877/main.png"
      />
      <div className="flex flex-col gap-1">
        <h2 className="font-medium">Khanomi (Frontend Developer)</h2>
        <div className="flex items-center gap-4">
          <p className="font-medium text-muted-foreground text-xs">
            Salary: 100,000 $ / year
          </p>
          <span className="rounded-md bg-amber-50 px-3 py-1.5 font-medium text-amber-500 text-xs">
            Full-Part
          </span>
        </div>
      </div>
    </div>
    <p className="line-clamp-2 text-muted-foreground text-xs/6">
      We are looking for a Front-End Web Engineer who is motivated to combine
      the art of design with the art of programming. As a member of the Frontend
      team, you’ll be working on various projects with large-scale users by
      collaborating with product stakeholders ( Design, Product, QA, Backend).
    </p>
    <div className="flex flex-wrap items-center gap-4">
      <p className="flex items-center gap-1 text-muted-foreground text-xs">
        <MapPin className="size-4" />
        Tehra, IRAN
      </p>
      <Separator orientation="vertical" className="h-4" />
      <p className="flex items-center gap-1 text-muted-foreground text-xs">
        <Banknote className="size-4" />
        100,000 USD
      </p>
      <Separator orientation="vertical" className="h-4" />
      <p className="flex items-center gap-1 text-muted-foreground text-xs">
        <ClockIcon className="size-4" />3 minutes ago
      </p>
    </div>
    <div className="flex items-center gap-2">
      <span className="rounded-md bg-muted px-3 py-1.5 font-medium text-foreground/80 text-xs">
        React.JS
      </span>
      <span className="rounded-md bg-muted px-3 py-1.5 font-medium text-foreground/80 text-xs">
        TypeScript
      </span>
      <span className="rounded-md bg-muted px-3 py-1.5 font-medium text-foreground/80 text-xs">
        Next.JS
      </span>
      <span className="rounded-md bg-muted px-3 py-1.5 font-medium text-foreground/80 text-xs">
        TailwindCSS
      </span>
    </div>
    <Button
      variant={'secondary'}
      className='right-4 bottom-4 lg:absolute lg:w-fit'
    >
      Details
    </Button>
  </div>
);

export function JobList() {
  return (
    <section>
      <h6 className="my-4 text-muted-foreground text-sm">250 jobs results</h6>
      <div className="grid gap-4">
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
    </section>
  );
}
