import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { SettingsRepository } from '../repositories/SettingRepository';
import { SettingService } from '../services/SettingService';

class SettingsController {
  async create(req: Request, res: Response) {
    const { chat, username } = req.body;

    try {
      const settingService = new SettingService();
      const settings = await settingService.create({ chat, username });
      return res.status(200).json(settings);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

export { SettingsController };
