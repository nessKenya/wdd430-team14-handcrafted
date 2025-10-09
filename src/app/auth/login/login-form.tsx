'use client';

import { useActionState } from 'react';
import { authenticate } from '@/app/lib/actions';
import { useSearchParams } from 'next/navigation';

export default function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/seller/items';
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );

  return (
    <form action={formAction} className="my-12">
        <div className="form-item">
          <label htmlFor="email">Email</label>
          <input id='email' name='email' type="email" required />
        </div>
        <div className="form-item">
          <label htmlFor="password">Password</label>
          <input id='password' name='password' type="password" required />
        </div>

        <input type="hidden" name="redirectTo" value={callbackUrl} />

        <button className="btn-alt" type="submit" aria-disabled={isPending}>Login</button>

        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && (
            <>
              <p className="text-sm text-rose-500">{errorMessage}</p>
            </>
          )}
        </div>
    </form>
  );
}
