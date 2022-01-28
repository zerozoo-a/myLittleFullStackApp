import express, { Router } from 'express';
import type { Request, Response, NextFunction } from 'express';
import { Routes } from '../interfaces/routes.interface';
import UserController from '../controllers/users.controller';

export default class UserRoute implements Routes {
  public path = '/user';
  public router = Router();
  public userController = new UserController();
  constructor() {
    this.initializeRoutes();
  }
  private initializeRoutes(): void {
    this.router.get(`${this.path}`, this.userController.mainView);
  }
}
