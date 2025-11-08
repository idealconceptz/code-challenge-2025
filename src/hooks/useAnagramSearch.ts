'use client';

import { useState } from 'react';
import { findAnagrams } from '@/utils/anagram';

export function useAnagramSearch(wordList: string[]) {
  const [input, setInput] = useState('');
  const [matches, setMatches] = useState<string[]>([]);
  const [touched, setTouched] = useState(false);

  const search = () => {
    setTouched(true);
    setMatches(findAnagrams(input, wordList));
  };

  const handleInputChange = (value: string) => {
    setInput(value);
    if (value === '') {
      setMatches([]);
      setTouched(false);
    }
  };

  const clear = () => {
    setInput('');
    setMatches([]);
    setTouched(false);
  };

  return {
    input,
    matches,
    touched,
    search,
    handleInputChange,
    clear,
  };
}
