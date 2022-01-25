import 'dotenv/config';
import express from 'express';
import userRouter from './routes/user';
import mysql, { MysqlError } from 'mysql';
import cors from 'cors';
import type { Express, Request, Response } from 'express';

const app: Express = express();
export const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.PASSWORD,
});
connection.connect(function (error: MysqlError): void {
  if (error) throw error;
  console.log('my sql connected!');

  connection.query(
    'CREATE DATABASE my_base_db;',
    function (error: MysqlError, result): void {
      if (error) {
        connection.query('USE my_base_db;', function (error: MysqlError): void {
          console.log('sql use!');
        });
        connection.query(
          `CREATE TABLE users(
            id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
            name VARCHAR(20) NOT NULL,
            email VARCHAR(25) NOT NULL
            );`,
          function (error: MysqlError): void {
            console.log('table created!');
          }
        );
      }
    }
  );
});
const PORT: number = 8000;
const log = console.log;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response): void => {
  res.json({ helloWorld: 'hello world' });
});

app.use('/user', userRouter);

app
  .listen(PORT, (): void => {
    log(`express listen on PORT: ${PORT}
	🚀 goto : http://localhost:${PORT}/
	`);
  })
  .on('error', (error: Error): void => {
    console.error('error: ', error);
    app.listen(PORT + 1);
  });
