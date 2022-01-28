import { Router } from 'express';
import IndexController from '../controllers/index.controller';
import { Routes } from '../interfaces/routes.interface';

export default class IndexRoute implements Routes {
  public path = '/';
  public router = Router();
  public indexController = new IndexController();

  constructor() {
    this.initialzieRoutes();
  }
  private initialzieRoutes(): void {
    this.router.get(`${this.path}`, this.indexController.mainView);
  }
}
