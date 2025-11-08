'use client';

import { Button, Card } from '@heroui/react';
import { useRouter } from 'next/navigation';

export function HomeClient() {
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <Card className="p-8 max-w-md w-full text-center shadow-lg">
        <h1 className="text-3xl font-bold mb-6">Anagram Finder</h1>
        <p className="mb-8 text-gray-600">Find all anagrams for any word!</p>
        <Button
          color="primary"
          size="lg"
          aria-label="Find anagrams"
          onPress={() => router.push('/anagramfinder')}
        >
          Go to Anagram Finder
        </Button>
      </Card>
    </div>
  );
}
