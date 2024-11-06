'use client';
import { Toaster } from 'react-hot-toast';

export const ToastProvider = () => {
  return (
    <Toaster
      position="bottom-left"
      toastOptions={{
        style: {
          background: 'hsl(var(--muted))',
          color: 'hsl(var(--foreground))',
          borderRadius: 'var(--radius)',
          fontSize: 14,
          borderWidth: 1,
          borderStyle: 'solid',
          boxShadow: 'none',
          borderColor: 'hsl(var(--border))',
        },
      }}
    />
  );
};