// database.js

import { createConnection } from 'typeorm';
import { entities } from './entity_modal';

export async function createDatabaseConnection() {
  try {
    const connection = await createConnection({
      // Database connection options
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'hostelManagment',
      entities: entities,
      synchronize: true, // Automatically synchronize database schema with entity definitions (for development only)
    });

    console.log('Database connection established');
    return connection;
  } catch (error) {
    console.error('Error connecting to database:', error);
    throw error;
  }
}
