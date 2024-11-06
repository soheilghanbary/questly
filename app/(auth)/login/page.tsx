import { OAuth } from '@/components/(auth)/oauth';
import { TextLine } from '@/components/common/text-line';
import { auth } from '@/server/auth';
import { BrainCog } from 'lucide-react';
import { redirect } from 'next/navigation';

export default async function LoginPage() {
  const session = await auth();

  if (session) {
    redirect('/');
  }

  return (
    <div className="flex h-svh w-svw items-center justify-center">
      <div className="flex w-full max-w-sm flex-col gap-2 rounded-lg border p-8 text-center shadow-sm">
        <BrainCog className="mx-auto size-9 text-primary" />
        <h1 className="font-bold">Sign In</h1>
        <p className="text-muted-foreground text-xs">
          Sign in with Google or Github
        </p>
        <TextLine text="Sign In with" />
        <OAuth />
        <p className="mt-4 font-medium text-muted-foreground text-xs">
          create account?{' '}
          <span className="text-foreground underline">Sign Up</span>
        </p>
      </div>
    </div>
  );
}