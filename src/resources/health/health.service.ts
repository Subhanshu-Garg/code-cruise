export class HealthService {
  public async getStatus() {
    return {
      status: 'success',
      message: 'Server is healthy',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
    };
  }
}