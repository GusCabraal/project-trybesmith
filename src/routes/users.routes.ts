import { Router } from 'express';
import { UsersController } from '../controllers';

const usersController = new UsersController();

const router = Router();

router.post('/', usersController.create);

export default router;