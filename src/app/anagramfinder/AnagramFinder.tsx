'use client';

import { Button, Input } from '@heroui/react';
import { useAnagramSearch } from '@/hooks/useAnagramSearch';

export default function AnagramFinder({ wordList }: { readonly wordList: readonly string[] }) {
  const { input, matches, touched, search, handleInputChange } = useAnagramSearch(
    wordList as string[]
  );

  function handleInputChangeEvent(e: React.ChangeEvent<HTMLInputElement>) {
    handleInputChange(e.target.value);
  }

  let resultContent = null;
  if (touched && input !== '') {
    if (matches.length === 0) {
      resultContent = <div className="text-red-500 text-base">No anagrams found</div>;
    } else {
      resultContent = (
        <div>
          <div className="mb-2 text-base text-zinc-700 dark:text-zinc-200">Anagrams found:</div>
          <ul className="list-disc pl-6">
            {matches.map((word) => (
              <li key={word} className="text-lg text-zinc-800 dark:text-zinc-100">
                {word}
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
  return (
    <div className="w-full max-w-md mx-auto">
      <label
        htmlFor="anagram-input"
        className="block mb-2 text-xs font-medium text-zinc-700 dark:text-zinc-200"
      >
        Find Anagrams
      </label>

      <div className="flex gap-2">
        <Input
          id="anagram-input"
          type="text"
          value={input}
          onChange={handleInputChangeEvent}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              search();
            }
          }}
          placeholder="Enter a word or phrase"
          autoComplete="off"
          aria-label="Anagram input"
        />
        <Button
          color="primary"
          onPress={search}
          className="px-8"
          size="md"
          aria-label="Find anagrams"
        >
          Find anagrams
        </Button>
      </div>
      <div className="mt-4" aria-live="polite" aria-relevant="all">
        {resultContent}
      </div>
    </div>
  );
}
