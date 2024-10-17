import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import { prisma } from '@/app/lib/prisma';

const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        console.log('Authorize function called with email:', credentials.email);
        
        if (!credentials?.email || !credentials?.password) {
          console.log('Missing email or password');
          return null;
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email }
        });

        console.log('User found:', user ? 'Yes' : 'No');

        if (user && await bcrypt.compare(credentials.password, user.password)) {
          console.log('Password match successful');
          return {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
          };
        }

        console.log('Authentication failed');
        return null;
      }
    })
  ],
  callbacks: {
    // ... your existing callbacks
  },
  pages: {
    signIn: '/login',
  },
  debug: true, // Add this line to enable debug mode
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
