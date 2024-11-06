'use client';
import { login } from '@/server/actions/auth.action';
import { useTransition } from 'react';
import { toast } from 'react-hot-toast';
import { Button } from '../ui/button';

export function OAuth() {
  const [pending, mutate] = useTransition();

  const handleLogin = async (provider: 'google' | 'github') => {
    toast.loading('Waiting ...');
    mutate(async () => {
      await login(provider);
    });
  };

  return (
    <div className="grid grid-cols-2 gap-2">
      <Button
        disabled={pending}
        variant={'outline'}
        onClick={() => handleLogin('github')}
      >
        GitHub
      </Button>
      <Button
        disabled={pending}
        variant={'outline'}
        onClick={() => handleLogin('google')}
      >
        Google
      </Button>
    </div>
  );
}