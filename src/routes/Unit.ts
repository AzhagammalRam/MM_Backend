import { Router } from 'express';
import { addUnit, getUnit, updateUnit, removeUnit } from '../controllers/UnitController';

const router = Router();

router.post('/addUnit', addUnit);
router.get('/getUnit', getUnit);
router.put('/updateUnit', updateUnit);
router.delete('/removeUnit', removeUnit);

export default router;
