# CWP/TASK/12 - Sequelize, часть 1
Sequelize, часть 1 ЛР12

function task00() {

Создаем на Github репозиторий cwp-12, клонируем его, открываем в IDE

Для выполнения последующих работ нам понадобиться база данных. Выберем одну из поддерживаемых библиотекой sequelize, например, mysql

Создадим файлы index.js, package.json, config.json, models/index.js, models/turtle.js, models/weapon.js и models/pizza.js

Содержимое файла index.js:

const Sequelize = require('sequelize');

const config = require('./config.json');

const db = require('./models')(Sequelize, config);

// TODO: запросы к БД

Содержимое файла models/index.js:
const Turtle = require('./turtle');

const Weapon = require('./weapon');

const Pizza = require('./pizza');

module.exports = (Sequelize, config) => {

  // TODO: создание объекта для подключения к базе - sequelize

  const turtles = Turtle(Sequelize, sequelize);

  const weapons = Weapon(Sequelize, sequelize);

  const pizzas = Pizza(Sequelize, sequelize);

  // TODO: создание связей между таблицами

  return {
    
    turtles,
    weapons,
    pizzas,
    sequelize: sequelize,
    Sequelize: Sequelize,
  };
};

Содержимое файла models/turtle.js:

module.exports = (Sequelize, sequelize) => {
  return sequelize.define('turtles', {
    // TODO: описание полей
  });
};

Содержимое файла models/weapon.js:

module.exports = (Sequelize, sequelize) => {
  return sequelize.define('weapons', {
    // TODO: описание полей
  });
};

Содержимое файла models/pizza.js:

module.exports = (Sequelize, sequelize) => {
  return sequelize.define('pizzas', {
    // TODO: описание полей
  });
};
}

function task01() {

Нам необходимо заменить TODO комментарии кодом, исходя из требований

1. Модель черепашки-ниндзя:

"id": int / autoincrement

"name": string

"color": string

"weaponId": int

"firstFavoritePizzaId": int

"secondFavoritePizzaId": int

2. Модель оружия:

"id": int / autoincrement

"name": string

"dps": int

3. Модель пиццы:

"id": int / autoincrement

"name": string

"description": string

"calories": double

4. Напишем код для синхронизации моделей с БД. Будем выполнять полное пересоздание таблиц при каждом запуске скрипта

5. Напишем код для наполнения таблиц данными из скрипта. Данные для таблиц поможет найти Google

}

function task02() {

Продемонстрируем различные операции с помощью sequelize


1. Выведем всех черепашек-ниндзя

2. Выведем всех черепашек-ниндзя у кого любимая пицца "Mozzarella"

3. Выведем все пиццы отмеченные как любимые без повторов

4. Создадим пятую черепашку с вашим именем и любимым цветом. Незабываем про оружие

5. Обновим все пиццы с количеством калорий больше 3000 добавив к описанию "SUPER FAT!"

6. Запросим число оружий с dps больше 100

7. Найдем пиццу с id равным 1

8. Добавим пятой черепашке любимую пиццу через объект черепахи

}

function task03() {

Синхронизируем локальный репозиторий с удаленным (сделаем push на Github)

}