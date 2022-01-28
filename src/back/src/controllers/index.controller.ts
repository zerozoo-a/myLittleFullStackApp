import type { NextFunction, Request, Response } from 'express';

class IndexController {
  public index = (req: Request, res: Response, next: NextFunction): void => {
    try {
      res.sendStatus(200);
    } catch (error) {
      next(error);
    }
  };
  public mainView = (req: Request, res: Response): void => {
    res.status(200).send('node express index');
  };
}
export default IndexController;
