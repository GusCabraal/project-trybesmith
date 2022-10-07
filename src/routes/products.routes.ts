import { Router } from 'express';
import { ProductsController } from '../controllers';
import { validateNewProduct } from '../middlewares/validateInputValues';

const productsController = new ProductsController();

const router = Router();

router.get('/', productsController.getAll);
router.post('/', validateNewProduct, productsController.create);

export default router;