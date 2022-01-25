import express from 'express';
import { connection } from '../service';
import type { Router, Request, Response, NextFunction } from 'express';
import { MysqlError } from 'mysql';
const log = console.log;

const userRouter: Router = express.Router();

userRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.json({ helloReact: 'Hello User~' });
});

userRouter.post('/', (req: Request, res: Response): void => {
  connection.query('USE my_base_db');
  connection.query(
    `CREATE TABLE user_comment(
    user_comment_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    comment VARCHAR(30) NOT NULL
  );`,
    function (error: MysqlError): void {
      if (error) {
        console.log('user_comment table is already exist!');
        connection.query(
          `INSERT INTO user_comment(comment)
        VALUES ('${req.body.comment}');`,
          function (error: MysqlError, result) {
            console.log('insert into result', result);
            return result;
          }
        );
      }
      console.log(`user_comment table created!`);
    }
  );
  connection.query(
    `SELECT * FROM my_base_db.users`,
    function (error: MysqlError, result) {
      console.log('user result: ', result);
    }
  );
  res.status(201).json(req.body);
});
export default userRouter;
