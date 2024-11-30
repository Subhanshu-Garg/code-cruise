import { body } from 'express-validator';

export const createUserValidation = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required')
    .isLength({ min: 2, max: 50 })
    .withMessage('Name must be between 2 and 50 characters'),
  
  body('email')
    .isEmail()
    .withMessage('Invalid email address')
    .normalizeEmail(),
  
  body('role')
    .optional()
    .isIn(['user', 'admin'])
    .withMessage('Invalid role'),
];