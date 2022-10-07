import { Router } from 'express';
import { UsersController } from '../controllers';
import { validateNewUser } from '../middlewares/validateInputValues';

const usersController = new UsersController();

const router = Router();

router.post('/', validateNewUser, usersController.create);

export default router;