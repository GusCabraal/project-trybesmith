import { Router } from 'express';
import { ProductsController } from '../controllers';

const productsController = new ProductsController();

const router = Router();

router.get('/', productsController.getAll);
router.post('/', productsController.create);

export default router;