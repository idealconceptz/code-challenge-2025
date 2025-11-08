export function normalize(str: string): string {
  return str
    .replaceAll(/[^a-zA-Z0-9]/g, '')
    .toLowerCase()
    .split('')
    .sort((a, b) => a.localeCompare(b))
    .join('');
}

export function findAnagrams(input: string, wordList: string[]): string[] {
  if (!input) return [];
  const normInput = normalize(input);
  return wordList.filter((word) => normalize(word) === normInput);
}
