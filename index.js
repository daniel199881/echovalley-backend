import express from "express";
import dotenv from 'dotenv';
import routes from './routes/routes.js';
import database from './database/database.js';
import bodyParser from "body-parser";

// ENVIROMENT VARIABLES
dotenv.config({ path: '.env' });

// Init Express App
const app = express();

database.sync({ alter: true })
    .then(() => {
        console.log('Connection has been established successfully.');

        app.use(bodyParser.json());

        // Router
        routes(app, express);
        
        const PORT = process.env.PORT;
        app.listen(PORT, console.log(`Server running on port ${PORT}`));
    })
    .catch(err => {
        console.log('error: ', err);
    })

