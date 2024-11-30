import { User } from './user.interface';
import { AppError } from '../../common/errors/AppError';

export class UserService {
  private users: User[] = [];

  public async getAllUsers(): Promise<User[]> {
    return this.users;
  }

  public async getUserById(id: string): Promise<User | undefined> {
    return this.users.find(user => user.id === id);
  }

  public async createUser(userData: Omit<User, 'id'>): Promise<User> {
    const newUser: User = {
      id: Date.now().toString(),
      ...userData,
    };
    this.users.push(newUser);
    return newUser;
  }

  public async updateUser(id: string, userData: Partial<User>): Promise<User | undefined> {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex === -1) {
      throw new AppError('User not found', 404);
    }
    
    this.users[userIndex] = {
      ...this.users[userIndex],
      ...userData,
    };
    
    return this.users[userIndex];
  }

  public async deleteUser(id: string): Promise<void> {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex === -1) {
      throw new AppError('User not found', 404);
    }
    this.users.splice(userIndex, 1);
  }
}