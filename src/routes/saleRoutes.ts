import { Router } from 'express';

import * as SaleController from '../controllers/saleController';

const router = Router();

router.post('/sale', SaleController.newSale);
router.delete('/sale/:id', SaleController.removeSale);


export default router;