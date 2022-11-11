const express = require('express');

const { cardRouter } = require('./cards');
const { userRouter } = require('./users');
const { login, createUser } = require('../controllers/users');
const { validateCreateUser, validateLogin } = require('../utils/utils');

const { auth } = require('../middlewares/auth');
const { NotFoundError } = require('../errors');

const routes = express.Router();

routes.all('*', express.json());

routes.use(auth);

routes.post(
  '/signup',
  validateCreateUser,
  createUser,
);

routes.post(
  '/signin',
  validateLogin,
  login,
);

routes.use('/users', auth, userRouter);
routes.use('/cards', auth, cardRouter);

routes.all('*', (req, res, next) => {
  next(new NotFoundError('Страница не найдена'));
});

module.exports = { routes };
