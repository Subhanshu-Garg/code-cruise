import { Request, Response, NextFunction } from 'express';
import { UserService } from './user.service';
import { AppError } from '../../common/errors/AppError';
import { asyncHandler } from '../../common/middleware/asyncHandler';

export class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  public getAll = asyncHandler(async (req: Request, res: Response) => {
    const users = await this.userService.getAllUsers();
    res.status(200).json({
      status: 'success',
      data: users,
    });
  });

  public getById = asyncHandler(async (req: Request, res: Response) => {
    const user = await this.userService.getUserById(req.params.id);
    if (!user) {
      throw new AppError('User not found', 404);
    }
    res.status(200).json({
      status: 'success',
      data: user,
    });
  });

  public create = asyncHandler(async (req: Request, res: Response) => {
    const user = await this.userService.createUser(req.body);
    res.status(201).json({
      status: 'success',
      data: user,
    });
  });

  public update = asyncHandler(async (req: Request, res: Response) => {
    const user = await this.userService.updateUser(req.params.id, req.body);
    if (!user) {
      throw new AppError('User not found', 404);
    }
    res.status(200).json({
      status: 'success',
      data: user,
    });
  });

  public delete = asyncHandler(async (req: Request, res: Response) => {
    await this.userService.deleteUser(req.params.id);
    res.status(204).send();
  });
}