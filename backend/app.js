require('dotenv').config();

const express = require('express'); // Подключаем экспресс
const mongoose = require('mongoose'); // И мангуста
const { errors } = require('celebrate');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cors = require('cors');

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
  'api.mesto-exo.nomoredomains.icu',
  'api.mestoapp.gq',
  'www.api.mestoapp.gq',
  'https://praktikum.tk',
  'http://praktikum.tk',
  'localhost:3000',
];

// Подключаемся к серверу MongoDB по адресу:
mongoose
  .connect(DATABASE_URL)
  .then(() => {
    console.log(`Connected to database on ${DATABASE_URL}`);
  })
  .catch((err) => {
    console.log('Error on database connection');
    console.error(err);
  });

app.use(express.json());

app.use((req, res, next) => {
  const { origin } = req.headers; // Сохраняем источник запроса в переменную origin
  // проверяем, что источник запроса есть среди разрешённых
  if (allowedCors.includes(origin)) {
  // устанавливаем заголовок, который разрешает браузеру запросы с этого источника
    res.header('Access-Control-Allow-Origin', origin);
  }
  next();
});

// РОУТЫ
app.use(limiter);

app.use(cors());

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
app.use(routes);

app.use(errLogger);

app.use(errors());

app.use(handleError);

app.listen(PORT, () => { // Сервер слушает 3000-й порт
  console.log(`App listening on port ${PORT}`);
});
