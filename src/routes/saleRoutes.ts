import { Router } from 'express';

import * as SaleController from '../controllers/saleController';

const router = Router();

router.post('/sale', SaleController.newSale);
router.delete('/sale/:id', SaleController.removeSale);
router.get('/sales/list', SaleController.listSale);
router.get('/sales/page/:page', SaleController.paginationSale);


export default router;