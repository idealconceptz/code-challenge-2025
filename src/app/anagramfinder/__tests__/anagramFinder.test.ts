import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { findAnagrams } from '../../../utils/anagram';

describe('AnagramFinder', () => {
  const wordListPath = path.resolve(__dirname, 'wordList.txt');
  const wordList = fs.readFileSync(wordListPath, 'utf-8').split('\n').filter(Boolean);

  it('shows no results for empty input', () => {
    expect(findAnagrams('', wordList)).toEqual([]);
  });

  it('shows no anagrams for "asdfghjk"', () => {
    expect(findAnagrams('asdfghjk', wordList)).toEqual([]);
  });

  it('finds anagrams for "steak"', () => {
    const result = findAnagrams('steak', wordList);
    expect(result.toSorted((a: string, b: string) => a.localeCompare(b))).toEqual(
      ['Keats', 'skate', 'Skeat', 'stake', 'steak', 'takes', 'teaks'].toSorted(
        (a: string, b: string) => a.localeCompare(b)
      )
    );
  });

  it('finds anagrams for "eeenginr"', () => {
    const result = findAnagrams('eeenginr', wordList);
    expect(result.toSorted((a: string, b: string) => a.localeCompare(b))).toEqual(
      ['engineer', 're-engine'].toSorted((a: string, b: string) => a.localeCompare(b))
    );
  });
});
