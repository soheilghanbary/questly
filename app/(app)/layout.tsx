import { Footer } from '@/components/(app)/footer';
import { Header } from '@/components/(app)/header';

export default function AppLayout({ children }: React.PropsWithChildren) {
  return (
    <>
      <div className="container">
        <Header />
        <main className='container relative min-h-screen p-4'>{children}</main>
      </div>
      <Footer />
    </>
  );
}
