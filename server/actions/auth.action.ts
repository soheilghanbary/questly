'use server';
import { signIn } from '@/server/auth';

export const login = async (provider: 'google' | 'github') => {
  return await signIn(provider);
};
