import { Router } from 'express';

import * as SaleController from '../controllers/saleController';

const router = Router();

router.get('/sale', SaleController.newSale);


export default router;