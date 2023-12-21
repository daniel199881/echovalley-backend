import express from 'express';
import { create, list, remove } from '../../controllers/expense.js';
import asyncHandler from '../../middleware/async.js';
import validate from '../../validators/api/expense.js';
import { validate_result } from '../../middleware/validator.js';

const router = express.Router();

router.get('/',  asyncHandler(list));
router.post('/', validate('create'), validate_result, asyncHandler(create));
router.delete('/:id', validate('delete'), validate_result, asyncHandler(remove))

export default router;