import Image from 'next/image';
import { Inter } from 'next/font/google';
import { signIn, signOut, useSession } from 'next-auth/react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const session = useSession();

  console.log('session', session);

  if (!session.data) {
    return (
      <div className='flex justify-end mt-5 mr-3'>
        <button
          onClick={() => signIn('github')}
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >
          Sign in with GitHub
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className='flex justify-center mt-5'>
        <h1 className='text-4xl font-bold'>Welcome to NextAuth</h1>
      </div>
      <div className='flex justify-center mt-5'>
        <button
          onClick={() => signOut()}
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >
          Sign in with GitHub
        </button>
      </div>
    </div>
  );
}
