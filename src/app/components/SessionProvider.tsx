'use client';
import { SessionProvider } from 'next-auth/react';

export default function NextAuthSessionProvider({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return <SessionProvider>{children}</SessionProvider>;
}
