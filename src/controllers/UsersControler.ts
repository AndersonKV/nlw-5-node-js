import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { SettingsRepository } from '../repositories/SettingRepository';
import { UserService } from '../services/UserService';

class UsersController {
  async create(req: Request, res: Response): Promise<Response> {
    const { email } = req.body;

    try {
      const userService = new UserService();
      const user = await userService.create(email);
      return res.status(200).json(user);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
  async getAllUsers(req: Request, res: Response): Promise<Response> {
    try {
      const userService = new UserService();
      const users = await userService.getAllUsers();
      return res.status(200).json(users);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

export { UsersController };
