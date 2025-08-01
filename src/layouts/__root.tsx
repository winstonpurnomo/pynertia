import type { ReactNode } from 'react';
import { Toaster } from 'sonner';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <Toaster
        toastOptions={{
          classNames: {
            toast:
              "flex items-center [&:has([data-slot='button'])]:justify-between [&:not(:has([data-slot='button']))]:justify-start [&:not(:has([data-slot='button']))]:gap-3",
          },
        }}
      />
    </>
  );
}
