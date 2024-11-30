import { Request, Response } from 'express';
import { HealthService } from './health.service';

export class HealthController {
  private healthService: HealthService;

  constructor() {
    this.healthService = new HealthService();
  }

  public check = async (req: Request, res: Response) => {
    const status = await this.healthService.getStatus();
    res.status(200).json(status);
  };
}