import { Router } from 'express';
import { addMaterial, getMaterials, updateMaterial, removeMaterial } from '../controllers/MaterialController';

const router = Router();

router.post('/addMaterial', addMaterial);
router.get('/getMaterials', getMaterials);
router.put('/updateMaterial', updateMaterial);
router.delete('/removeMaterial/:id', removeMaterial);

export default router;
