import type { Request, Response, NextFunction } from 'express';
class UserController {
  public mainView(req: Request, res: Response): void {
    res.status(200).send('Hello MVC');
    return;
  }
}

export default UserController;
