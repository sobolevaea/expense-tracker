<p align="right">
  <strong>Русский</strong> | <a href="README-EN.md">English</a>
</p>

# Проект "Трекер расходов":

[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=sobolevaea_expense-tracker&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=sobolevaea_expense-tracker)

Приложение для учёта личных расходов.
Позволяет добавлять и удалять траты, видеть общую сумму расходов, суммы по категориям и визуализировать их с помощью диаграммы.

### ▷ [Live версия](https://frontend-expense-tracker-w8dr.onrender.com)

## Фреймворк

Использован React с Redux Toolkit.
Почему выбран:

- React позволяет создавать интерактивный интерфейс с компонентами.
- Redux Toolkit упрощает управление состоянием и работу с localStorage
- Широкая экосистема (Formik, React-Bootstrap, Recharts) облегчает реализацию формы, списков и графиков.

## Реализованные усложнения

- Диаграмма расходов
- Деплой
- Локализация
- CI/CD

## Начало работы

Для локальной настройки проекта необходимо выполнить следующие шаги:

1. Склонировать репозиторий

```bash
git clone git@github.com:sobolevaea/expense-tracker.git
cd expense-tracker
```

2. Установить зависимости

```bash
make install
```

3. Запустить клиент

```bash
make run
```

Приложение будет доступно по локальному адресу (http://localhost:5173/)
