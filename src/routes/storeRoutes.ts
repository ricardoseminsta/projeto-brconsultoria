import { Router } from 'express';

import * as StoreController from '../controllers/storeController';

const router = Router();

router.post('/store', StoreController.newStore);
router.post('/login', StoreController.login);

router.get('/list', StoreController.list);

export default router;