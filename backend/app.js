require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const { errors } = require('celebrate');
const userRouter = require('./routes/users');
const cardRouter = require('./routes/cards');
const { login, createUser } = require('./controllers/users');

const handlerError = require('./middlewares/handlerError');
const { validationCreateUser, validationLoginUser } = require('./middlewares/validationJoiUser');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const corsMiddleware = require('./middlewares/corsMiddleware');

const NotFoundError = require('./errors/notFoundError');

const { PORT = 3000 } = process.env;
const app = express();

mongoose.connect('mongodb://0.0.0.0:27017/mestodb');

app.use(bodyParser.json());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(requestLogger);

app.use(limiter);
app.use(helmet());

app.use(corsMiddleware);

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

app.post('/signin', validationLoginUser, login);
app.post('/signup', validationCreateUser, createUser);
app.use(userRouter);
app.use(cardRouter);
app.use('*', () => {
  throw new NotFoundError('Запрашиваемая страница не найдена');
});

app.use(errorLogger);

app.use(errors());
app.use(handlerError);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`listen a ${PORT}`);
});
