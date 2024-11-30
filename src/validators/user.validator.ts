import { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';

export const validateCreateUser = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Invalid email address'),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        status: 'error',
        errors: errors.array(),
      });
    }
    next();
  },
];