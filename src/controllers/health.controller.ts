import { Request, Response } from 'express';

export class HealthController {
  public check = (req: Request, res: Response) => {
    res.status(200).json({
      status: 'success',
      message: 'Server is healthy',
    });
  };
}