import express, { Express, Request, Response } from "express";
import helmet from 'helmet';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

const PORT = process.env.PORT || 3005;
const app: Express = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
    res.send('<h1>Mass and Balance</h1>');
});

app.listen(PORT, () => {console.log(`Server listening on port ${PORT}`)});
