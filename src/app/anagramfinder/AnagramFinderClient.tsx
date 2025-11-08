'use client';

import { useSession } from 'next-auth/react';
import LogoutButton from '../components/LogoutButton';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import AnagramFinder from './AnagramFinder';

export default function AnagramFinderClient() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [wordList, setWordList] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const wordListURL = 'https://raw.githubusercontent.com/dwyl/english-words/master/words.txt';

  useEffect(() => {
    if (status === 'unauthenticated') {
      // router.replace('/api/auth/signin');
    }
  }, [status, router]);

  useEffect(() => {
    async function fetchWords() {
      try {
        const res = await fetch(wordListURL);
        if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
        const text = await res.text();
        setWordList(text.split('\n').filter(Boolean));
        setError(null);
      } catch (err: unknown) {
        setWordList([]);
        setError(err instanceof Error ? err.message : 'Failed to load word list');
      }
    }
    fetchWords();
  }, []);

  if (status === 'loading') {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black relative">
      <LogoutButton />
      <main className="flex flex-col items-center gap-8 bg-white dark:bg-black p-12 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-black dark:text-zinc-50">Anagram Finder</h1>
        <p className="text-xs text-zinc-600 dark:text-zinc-400">Welcome, {session?.user?.name}!</p>

        <div className="mt-4 text-sm text-zinc-500">
          {(() => {
            if (error) {
              return <span className="text-red-500">{error}</span>;
            }
            if (wordList.length > 0) {
              return <AnagramFinder wordList={wordList} />;
            }
            return 'Loading word list...';
          })()}
        </div>
      </main>
    </div>
  );
}
