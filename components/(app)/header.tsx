import { auth } from '@/server/auth';
import {
  BadgePlus,
  BriefcaseBusiness,
  HomeIcon,
  LogInIcon,
  type LucideIcon,
  PuzzleIcon,
  SearchIcon,
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';

const Logo = () => (
  <Link
    href={'/'}
    className="flex items-center gap-2 [&_h3]:font-semibold [&_h3]:text-primary [&_svg]:size-5 [&_svg]:text-primary"
  >
    <BriefcaseBusiness strokeWidth={2.5} />
    <h3>Questly</h3>
  </Link>
);

type NavLinkProps = {
  href: string;
  label: string;
  icon: LucideIcon;
};

const NavLink = ({ href, label, icon: Icon }: NavLinkProps) => {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 font-medium rounded-lg px-3 py-2 text-muted-foreground text-sm duration-100 hover:bg-muted/40 [&_svg]:size-4"
    >
      <Icon />
      <span>{label}</span>
    </Link>
  );
};

export async function Header() {
  const session = await auth();
  return (
    <header>
      <nav className="flex items-center justify-between gap-4 p-4">
        <Logo />
        <div className='hidden flex-1 items-center gap-1 md:flex'>
          <NavLink href="/" label="Home" icon={HomeIcon} />
          <NavLink href="/search" label="Find Job" icon={SearchIcon} />
          <NavLink href="/about" label="About Us" icon={PuzzleIcon} />
        </div>
        {session ? <Button variant={'secondary'} asChild>
          <Link href={'/jobs/new'}>
            Post a Job
          </Link>
        </Button> : <Button asChild>
          <Link href={'/login'}>
            <LogInIcon />
            Sign In
          </Link>
        </Button>
        }
      </nav>
    </header>
  );
}
