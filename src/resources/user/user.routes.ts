import { Router } from 'express';
import { UserController } from './user.controller';
import { createUserValidation } from './user.validation';
import { validateRequest } from '../../common/middleware/validateRequest';

const router = Router();
const userController = new UserController();

router.get('/', userController.getAll);
router.get('/:id', userController.getById);
router.post('/', validateRequest(createUserValidation), userController.create);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

export const userRoutes = router;