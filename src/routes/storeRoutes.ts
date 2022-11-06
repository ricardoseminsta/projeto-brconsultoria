import { Router } from 'express';

import * as StoreController from '../controllers/storeController';

const router = Router();

router.get('/store', StoreController.list);
router.post('/store', StoreController.newStore);
router.delete('/store/:id', StoreController.removeStore);
router.put('/store/:id', StoreController.updateStore);

export default router;