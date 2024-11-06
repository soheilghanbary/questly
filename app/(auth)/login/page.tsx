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
        <h1 className="font-bold">ورود به حساب کاربری</h1>
        <p className="text-muted-foreground text-xs">
          برای ادامه با گیت هاب یا گیت وارد شوید
        </p>
        <TextLine text="ورود با" />
        <OAuth />
        <p className="mt-4 font-medium text-muted-foreground text-xs">
          اکانت نداری؟{' '}
          <span className="text-foreground underline">ثبت نام کنید</span>
        </p>
      </div>
    </div>
  );
}