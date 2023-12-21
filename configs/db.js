import dotenv from 'dotenv';
dotenv.config({ path: '.env' });


// Define ENVIROMENT VARIABLES here so we don't have to call dotenv each time we want to access them
export default {
    host: process.env.DB_HOST ?? 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME,
    dialect: process.env.DB_DIALECT ?? 'mysql',

    pool: {
        max: 10, // Maximum number of connections in the pool
        min: 0, // Minimum number of connections in the pool
        acquire: 30000, // Maximum time in milliseconds that pool will try to get connection before throwing error
        idle: 10000 // Maximum time in milliseconds that a connection can be idle before being released
    }
};
