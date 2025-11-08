# Anagram Finder

## Note

1. This is a Next 16 app and requires Node version 20 or above to run.
2. I've assumed the file "https://raw.githubusercontent.com/dwyl/english-words/master/words.txt" (wordListURL) is the source of truth for known anagrams for the purpose of this task.

## Getting Started

Copy the following into your .env.local file and add your Google OAuth credentials.

```bash
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
NEXTAUTH_URL=http://localhost:3000
```

Run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Run tests:

```bash
npx vitest
```

## User Story

- As a logged in user
- When I enter a string of characters into the input field
- If there are matching anagrams, I want to see a list of those words (including the input, if it is a valid word)
- If there are no matching anagrams, I want the lack of matches to be clearly communicated

An anagram is defined as a word formed by rearranging the letters of a different word. In this case, we consider any word containing exactly the same alphanumeric characters to be an anagram, ignoring any punctuation or changes in case. For example:

1. “iceman” and “cinema” are considered anagrams.
2. “engineer” and “re-engineer” are considered anagrams, ignoring the hyphen.
3. “3D” and “3-D” are considered anagrams, ignoring the hyphen.
4. “Worth” and “throw” are considered anagrams, ignoring the capital letter.

### Acceptance Criteria

- The user can enter a string of characters into an input field.
- The user can see a list of anagrams of the input string.
- The user can see a message if there are no anagrams of the input string.

### UI

- Hide the anagram listing feature behind an authentication guard
- Only allow users to log in with a "Login with Gmail" button
- Use a modern UI library and framework prefereably Next.js with HeroUI
- Make sure that the UI is very intuitive and easy to interact with

### Test Cases

1. When the input is empty, the user should see no message or list of results.
2. For the input “asdfghjk”, the user should see the message “No anagrams found”.
3. For the input “steak”, the user should see a list of results including the words: “Keats”, “skate”, “Skeat”, “stake”, “steak”, “takes”, “teaks”.
4. For the input “eeenginr”, the user should see a list of results including the words: “engineer”, “re-engine”.
