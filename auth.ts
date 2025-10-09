import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import bcrypt from 'bcrypt';
import { sql } from '@/app/lib/data';

async function getSeller(email: string) {
  try {
    const user = await sql`SELECT * FROM sellers WHERE email=${email}`;
    return user[0];
  } catch (error) {
    console.error('Failed to fetch seller:', error);
    throw new Error('Failed to fetch user.');
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;

          const seller = await getSeller(email);

          const passwordsMatch = await bcrypt.compare(password, seller.password_hash);

          if (passwordsMatch)
            return {
                    id: seller.id,
                    name: `${seller.first_name} ${seller.last_name}`,
                    email: seller.email,
                  };
          }

        console.log('Invalid credentials');
        return null;
      },
    }),
  ],
  callbacks: {
    async session({session, token }) {
      if (token.sub) session.user.id = token.sub;
      return session;
    }
  }
});
