import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';

async function startServer() {
  const app = express();

  const PORT = Number(process.env.PORT) || 8000;

  app.use(express.json());

  // Create an ApolloServer
  const server = new ApolloServer({
    typeDefs: `
      type Query {
        hello: String
        sayHello(name: String!): String
      }
    
    `,
    resolvers: {
      Query: {
        hello: () => 'Hello from Apollo Server',
        sayHello: (_, { name }) => `Hello ${name}, How are you?`,
      },
    },
  });

  //Start the server
  await server.start();

  app.get('/', (req, res) => {
    res.json({ message: 'Server is Up and Running' });
  });

  // Specify the path where we'd like to mount our server
  app.use('/graphql', expressMiddleware(server));

  app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
}

startServer();
