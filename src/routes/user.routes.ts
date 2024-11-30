import { Router } from 'express';
import { UserController } from '../controllers/user.controller';
import { validateCreateUser } from '../validators/user.validator';

const router = Router();
const userController = new UserController();

router.get('/', userController.getAll);
router.get('/:id', userController.getById);
router.post('/', validateCreateUser, userController.create);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

export const userRoutes = router;