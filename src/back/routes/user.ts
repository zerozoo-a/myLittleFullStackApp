import express from 'express';
import { connection } from '../service';
import type { Router, Request, Response, NextFunction } from 'express';
const log = console.log;

const userRouter: Router = express.Router();

userRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.json({ helloReact: 'Hello User~' });
});

userRouter.post('/', (req: Request, res: Response): void => {
  connection.query('USE my_base_db');
  res.status(201).json(req.body);
});
export default userRouter;
