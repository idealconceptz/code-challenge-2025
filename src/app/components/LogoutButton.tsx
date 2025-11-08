'use client';

import { Button } from '@heroui/react';
import { signOut } from 'next-auth/react';

export default function LogoutButton() {
  return (
    <Button
      color="danger"
      variant="faded"
      onPress={() => signOut({ callbackUrl: '/' })}
      size="sm"
      className="absolute top-4 right-4"
    >
      Logout
    </Button>
  );
}
