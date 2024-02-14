import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

export const NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: 'c9c8c43f0c9bb42acfcc',
      clientSecret: '14aaf9fa45493fa339fda17abe79853bea2cbfba',
    }),
  ],
};

export default NextAuth(NextAuthOptions);
