import express from 'express';
import connection from './database/db.js'
import dotenv from 'dotenv';
import Default from './default.js';
import router from './routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

const PORT = 8000;

dotenv.config();

app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
router.options('*', cors());
app.use('/', router);

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

connection(USERNAME,PASSWORD);

app.listen(PORT, ()=>console.log('server is running successfull'));

Default();