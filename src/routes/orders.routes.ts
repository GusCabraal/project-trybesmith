import { Router } from 'express';
import { OrdersController } from '../controllers';
import { validateUpdateProduct } from '../middlewares/validateInputValues';
import validateJWT from '../middlewares/validateJWT';

const ordersController = new OrdersController();

const router = Router();

router.get('/', ordersController.getAll);
router.post('/', validateJWT, validateUpdateProduct, ordersController.create);

export default router;