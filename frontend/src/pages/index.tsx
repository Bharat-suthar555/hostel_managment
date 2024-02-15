import { Inter } from 'next/font/google';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [permission, setPermission] = useState(false);
  const session = useSession();

  useEffect(() => {
    if (!session.data) setPermission(false);
    else setPermission(true);
  }, [session]);

  console.log(permission, 'per');

  // if (!session.data) {
  //   return (
  //     <div>
  //       <div className='flex justify-end mt-5 mr-3'>
  //         <button
  //           onClick={() => signIn('github')}
  //           className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
  //         >
  //           Sign in with GitHub
  //         </button>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div>
      {!permission ? (
        <div>
          <div className='flex justify-end mt-5 mr-3'>
            <button
              onClick={() => signIn('github')}
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            >
              Sign in with GitHub
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className='flex justify-end mt-5 mr-3'>
            <button
              onClick={() => signOut()}
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            >
              LogOut
            </button>
          </div>
          <div className='flex justify-center mt-10'>
            <h1 className='text-4xl font-bold'>
              Welcome to NextAuth {session?.data?.user?.name}
            </h1>
          </div>
          <div className='flex justify-center mt-3'>
            {session?.data?.user?.email}
          </div>
        </div>
      )}
    </div>
  );
}
