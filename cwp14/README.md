# CWP/TASK/14 - Sequelize, часть 2

function task00() {

Создаем на Github репозиторий cwp-14, клонируем его, открываем в IDE

Создадим пустую базу данных features и настроим подлкючение к ней из index.js через sequelize

Опишем модели базы данных на основе схем из 10 и 11 работ (фильм и актер). Добавим связь между фильмом и актерами. Используем подход code first

}

function task01() {

Продемонстируем работу со следующими возможностями sequelize

1. Валидация полей budget, year и rating фильма

2. Пакетная вставка 3 фильмов

3. Пакетное обновление поля liked у актеров с 3 фильмами

4. Пакетное удаление актеров с liked равным 0

5. Получение за один запрос фильм со всеми его актерами (include)

6. Создание и применение scope для фильмов вышедших с 2007 года

7. Создание и вызов хуков beforeCreate, afterCreate

8. Транзакция: считываем всех актеров, пакетно обновляем им liked на 0, ждем 10 секунд, откатываем транзакцию

9. Демонстрация upgrade/downgrade методов миграции с добавление/удалением поля genres

}

function task02() {

Синхронизируем локальный репозиторий с удаленным (сделаем push на Github)

}