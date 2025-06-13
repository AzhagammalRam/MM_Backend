import { Router } from 'express';
import { addClient, getClient, updateClient, removeClient, getAllClient } from '../controllers/ClientController'

const router = Router();

router.post('/addClient',addClient)
router.post('/getClient',getClient)
router.post('/getAllClient',getAllClient)
router.post('/editClient',updateClient)
router.post('/removeClient',removeClient)


export default router;