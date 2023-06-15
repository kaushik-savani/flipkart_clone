import express from 'express';
import connection from './database/db.js'
import dotenv from 'dotenv';
import Default from './default.js';

const app = express();

const PORT = 8000;

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

connection(USERNAME,PASSWORD);

app.listen(PORT, ()=>console.log('server is running successfull'));

Default();