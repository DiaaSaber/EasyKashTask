import { Router } from 'express';
import transactions from '../controllers/transactionController'

const router = Router();

router.get('/listall', transactions.listAll);


export default router;