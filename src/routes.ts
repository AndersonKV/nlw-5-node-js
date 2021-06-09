import { response, Router } from 'express';
import { SettingsController } from './controllers/SettingsController';
import { UsersController } from './controllers/UsersControler';
import { MessagesController } from './controllers/MessagesControllers';

const routes = Router();
const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesControllers = new MessagesController();

routes.post('/settings', settingsController.create);
routes.post('/users', usersController.create);
routes.get('/users', usersController.getAllUsers);
routes.post('/messages', messagesControllers.create);
routes.get('/messages/:id', messagesControllers.showByUser);

export { routes };
