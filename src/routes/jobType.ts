import { Router } from 'express';
import { 
  addJobType, 
  getJobTypes, 
  updateJobType, 
  removeJobType 
} from '../controllers/JobTypeController';

const router = Router();

// Define routes
router.post('/job-types', addJobType);  // Route to create a JoType
router.get('/job-types', getJobTypes);  // Route to fetch JoTypes
router.put('/job-types', updateJobType);  // Route to update a JoType
router.delete('/job-types', removeJobType);  // Route to remove a JoType

export default router;
