import { ModeToggle } from '../common/mode-toggle';

export function Footer() {
  return (
    <footer className="border-t">
      <nav className="container flex items-center justify-between gap-4 px-4 py-2">
        <p className="text-foreground/80 text-sm [&_span]:font-medium [&_span]:text-foreground">
          Developed by Soheil Ghanbary
        </p>
        <ModeToggle />
      </nav>
    </footer>
  );
}