import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { createDatabaseConnection } from './database';
import { UserResolver} from './resolvers/userResolver';
import { buildSchema } from 'type-graphql';

async function startServer() {
  const app = express();

  const PORT = Number(process.env.PORT) || 8000;

  app.use(express.json());

  // Create an ApolloServer
  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver],
    })
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
createDatabaseConnection();
