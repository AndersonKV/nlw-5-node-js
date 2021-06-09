import { getCustomRepository, Repository } from 'typeorm';
import { User } from '../entities/User';
import { UserRepository } from '../repositories/UserRepository';

interface ISettingsCreate {
  chat: boolean;
  username: string;
}

class UserService {
  private usersRepository: Repository<User>;

  constructor() {
    this.usersRepository = getCustomRepository(UserRepository);
  }

  async create(email: string) {
    const userExists = await this.usersRepository.findOne({
      email,
    });

    if (userExists) {
      return { fail: 'email already' };
    }

    const user = this.usersRepository.create({ email });

    await this.usersRepository.save(user);

    return user;
  }
  async getAllUsers() {
    const userRepository = getCustomRepository(UserRepository);

    const userExists = await userRepository.find();

    return userExists;
  }
}

export { UserService };
