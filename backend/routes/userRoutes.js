import express from 'express';
import {getLoggedUser,loginUser, registerUser} from '../controllers/userController.js';
import {protect} from '../middleware/authMiddleware.js'
 
const router = express.Router();

router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/me',protect, getLoggedUser);

export default router;