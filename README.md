# Проект Mesto (React.js + Express.js)

В проекте задействованы две сущности: пользователи и карточки. Схемы и модели созданы через Mongoose с валидируемыми полями. Все роуты, кроме логина и логаута, защищены мидлвэрой auth, которая проверяет авторизацию и наличие токена в приходящих запросах. Обращение к API происходит через роуты с валидацией запросов через Joi и celebrate. В контроллерах описана логика обработки запросов. Контроллер логина создает JWT токен сроком на неделю. В контроллере регистрации пользователя пароль хешеруется модулем bcryptjs. В проекте реализована централизованная обработка ошибок через конструкторы ошибок - конструкторы передаются в блоках catch через функцию next и далее в мидлвэр обработки ошибок в app.js. Для логгирования запросов и ошибок используется библиотека Winston. Для разворачивания сервера используется облачный сервис Яндекс.Облако.



## Функционал:
- Регистрация и авторизация пользователей
- Изменение аватара пользователя 
- Изменение имени пользователя
- Возможность загружать фотокарточки в ленту
- Удаление загруженных вами карточек
- Постановка и снятие лайка карточкам всех пользователей
- Просмотр фотографии карточки в полноэкранном режие при клике на нее


## Стек технологий:
![JavaScript](https://img.shields.io/badge/-JavaScript-000?style=for-the-badge&logo=javascript)
![ReactJs](https://img.shields.io/badge/-React-000?style=for-the-badge&logo=react)
![NodeJS](https://img.shields.io/badge/-node.js-000?style=for-the-badge&logo=node.js)
![ExpressJS](https://img.shields.io/badge/-express.js-000?style=for-the-badge&logo=express)
![MongoDB](https://img.shields.io/badge/-MongoDB-000?style=for-the-badge&logo=mongodb)
![NGINX](https://img.shields.io/badge/-nginx-000?style=for-the-badge&logo=nginx)
![PM2](https://img.shields.io/badge/-pm2-000?style=for-the-badge&logo=pm2)
![ESLint](https://img.shields.io/badge/-eslint-000?style=for-the-badge&logo=eslint)
![Webpack](https://img.shields.io/badge/-webpack-000?style=for-the-badge&logo=webpack)
![HTML](https://img.shields.io/badge/-HTML-000?style=for-the-badge&logo=html5)
![CSS](https://img.shields.io/badge/-CSS-000?style=for-the-badge&logo=css3)


## Как запустить:
Клонировать репозиторий и установить зависимости.
```
git clone https://github.com/Evgen4ik94/react-mesto-api-full.git
cd react-mesto-api-full
npm install
```

## Планы по доработке:
- Добавить типизацию на TypeScript
- Переписать запросы на Async/Await (ES7)
- Рефакторинг стилей на Sass / Styled Components
- Добавить Redux или MobX для стейт менеджмента


## CLI:
Бэкенд:
```
npm run start // Запуск dev сервера
npm run dev // Запуск dev сервера с hot reload
npm run lint // Запуск ESLint
```
Фронтенд:
```
npm run start // Запуск dev сервера
npm run build // Сборка проекта
```

## Ссылки:
Public IP: `158.160.53.193`

* [Фронтенд часть проекта](https://mesto-exo.nomoredomains.icu)
* [Бэкенд часть проекта](https://api.mesto-exo.nomoredomains.icu)
* [Ссылка на макет в Figma](https://www.figma.com/file/2cn9N9jSkmxD84oJik7xL7/JavaScript.-Sprint-4?node-id=0%3A1)
* [Ссылка на макет в Figma с авторизацией](https://www.figma.com/file/5H3gsn5lIGPwzBPby9jAOo/JavaScript.-Sprint-12)


