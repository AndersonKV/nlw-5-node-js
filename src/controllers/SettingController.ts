import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { SettingsRepository } from '../repositories/SettingRepository';

class SettingsController {
  async create(req: Request, res: Response) {
    const { chat, username } = req.body;
    try {
      const settingRepository = getCustomRepository(SettingsRepository);

      const settings = await settingRepository.create({
        chat,
        username,
      });

      await settingRepository.save(settings);

      return res.status(200).json(settings);
    } catch (err) {
      return res.status(400).json({ error: 'ocorreu algum problema' });
    }
  }
}

export { SettingsController };
