import { RocketIcon } from 'lucide-react';
import { Button } from '../ui/button';

export function Hero() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-2 py-20 text-center">
      <h1 className='font-black text-3xl lg:text-5xl/tight'>
        Find Your Next Opportunity with Ease on Questly
      </h1>
      <p className="text-foreground/80 text-sm/6">
        Discover opportunities that fit you. Questly brings top jobs and talent
        together.
      </p>
      <Button className="mx-auto mt-2 h-11 w-fit rounded-full">
        <RocketIcon />
        Get Started
      </Button>
    </div>
  );
}