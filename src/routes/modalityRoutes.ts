import { Router } from 'express';

import * as ModalityController from '../controllers/modalityController';

const router = Router();

router.post('/charge', ModalityController.charge);


export default router;