import { SearchIcon } from 'lucide-react';
import { Button } from '../ui/button';

export function SearchJobs() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative flex flex-1 items-center justify-between gap-4">
        <input
          type="text"
          placeholder="Search jobs"
          className='h-12 w-full grow: rounded-lg border border-border/40 p-4 pl-11 text-foreground shadow-sm outline-none ring-primary duration-100 focus:ring-2'
        />
        <SearchIcon className="-translate-y-1/2 pointer-events-none absolute top-1/2 left-3.5 size-5 text-muted-foreground/50" />
      </div>
      <Button className="h-12">Search</Button>
    </div>
  );
}
