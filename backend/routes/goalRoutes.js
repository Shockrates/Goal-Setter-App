import express from 'express';
import { getGoals, setGoals, updateGoals, deleteGoals} from '../controllers/goalController.js';
import {protect} from '../middleware/authMiddleware.js'

const router = express.Router();

//router.get('/', getGoals);

//router.post('/', setGoals);

router.route('/').get(protect, getGoals).post(protect, setGoals);

router.put('/:id', protect, updateGoals);

router.delete('/:id',protect,  deleteGoals);

export default router;