import { Router } from 'express';
import { UsersController } from '../controllers';
import validateLogin from '../middlewares/validateInputValues';

const usersController = new UsersController();

const router = Router();

router.post('/', validateLogin, usersController.login);

export default router;