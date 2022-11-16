require('dotenv').config();

const express = require('express'); // Подключаем экспресс
const mongoose = require('mongoose'); // И мангуста
const { errors } = require('celebrate');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const { reqLogger, errLogger } = require('./middlewares/logger');
const { handleError } = require('./middlewares/handleError');
const { routes } = require('./routes');

const DATABASE_URL = 'mongodb://127.0.0.1:27017/mestodb';

const { PORT = 3000 } = process.env;

const app = express();
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 минут
  max: 50, // 100 запросов с одного IP
});



// Массив доменов, с которых разрешены кросс-доменные запросы
const allowedCors = [
  'mesto-exo.nomoredomains.icu',
  'mestoapp.gq',
  'www.mestoapp.gq',
  'https://praktikum.tk',
  'http://praktikum.tk',
  'localhost:3000',
  'https://web.postman.co',
];

// Подключаемся к серверу MongoDB по адресу:
mongoose.connect(DATABASE_URL);

app.use(express.json());

// CORS
app.use((req, res, next) => {
  const { origin } = req.headers;
  const { method } = req;
  const requestHeaders = req.headers['access-control-request-headers'];
  const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';

  res.header('Access-Control-Allow-Origin', origin);
  res.header('Access-Control-Allow-Credentials', true);

  if (method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
    res.header('Access-Control-Allow-Headers', requestHeaders);

    return res.end();
  }

  next();
});

app.use(limiter);

app.use(reqLogger);

app.use(helmet());

// Краш-тест сервера
// (вызывает принудительное падение сервера
// для проверки автоматического перезапуска)
app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});
// РОУТЫ
app.use(routes);

app.use(errLogger);

app.use(errors());

app.use(handleError);

app.listen(PORT, () => { // Сервер слушает 3000-й порт
  console.log(`App listening on port ${PORT}`);
});
