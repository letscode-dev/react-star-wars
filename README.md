# Star Wars

## Links
> Project
- https://dev-pandaren.github.io/react-star-wars
> Repository
- https://github.com/dev-pandaren/react-star-wars
> StoryBook
- https://dev-pandaren.github.io/react-star-wars/storybook

---

## Available Scripts
```bash
# General
npm run start            # run app in the development mode
npm run storybook        # run storybook
npm run deploy           # deploy app on Github Pages

# Deploy (part of "deploy" script)
npm run build            # builds the app for production
npm run build-storybook  # storybook build
npm run build-gh-pages   # deploy on Github Pages

# Not used
npm run eject            # remove the single build dependency
npm run deploy-storybook # storybook deploy
```

## API
- https://swapi.dev
- https://starwars-visualguide.com

---

## Lighthouse Metrics Performance
<img src="src/_temp/readme/lighthouse.png" width="500px" />

---

## Рассмотренные темы

### React.js
- Разворачивание приложения с `create-react-app`
- Состояние компонента (хук `useState`)
- Жизненный цикл компонента (хук `useEffect`)
- Context API (хук `useContext`)
- Рефы и DOM (хук `useRef`)
- Мемоизация (хук `useCallback`)
- Создание собственных хуков
- Фрагменты
- Паттерн `Higher-Order Component`
- Паттерн `Подъём состояния`
- Обработка событий
- Controlled Components
- Подключение CSS, `css-modules`, библиотека `classnames`
- Списки и ключи, `Reconciliation Algorithm`
- Отложенная загрузка компонентов `React.lazy()`
- Библиотека `prop-types` для валидации props

### React Router
- Базовый роутинг
- Параметры в URL
- Query Parameters в URL
- Обработка страницы 404 (Not Found)
- Хуки `useLocation` и `useHistory`

### Redux
- Базовая структура react-redux-приложения
- Хуки `useDispatch`, `useSelector`
- Создание асинхронных action с библиотекой `redux-thunk`
- Отслеживание состояния store с `redux-devtools-extension`

### Общее
- Задание Alias в React-приложении (библиотека `react-app-rewire-alias`)
- Деплой приложения на GitHub Pages (библиотека `gh-pages`)
- Создание Ui-Kit из визуальных компонентов и публикация в `@storybook`
- Библиотека `lodash` с готовыми функциями

### JavaScript
- Методы работы с массивами: `map`, `filter`, `forEach`
- Асинхронность: `Promise`, `Async Functions`
- ES6-модули (import и export)
- Оператор разворота для объектов (props для компонента)
- Деструктуризация массивов и объектов
- Тернарные операторы
- Работа с Local Storage
- Работа с API с использованием `Fetch`

### Вёрстка
- CSS Custom Properties, изменение через JavaScript
- CSS Filters
- CSS Flexbox
- CSS Multi Columns
- Стилизация скроллбара

---

## Порядок импортов
- Библиотеки
- Контекст
- HOC
- UI-компоненты
- Компоненты
- Изображения
- Хуки
- Роуты
- Утилиты
- Константы
- Стили

---

## TODO
- Авторизация
- Material UI, стилизация через css-in-js
- Тесты: Jest, Enzyme, Cypress
- Добавить шрифты
- Перегруппировка компонентов Header при адаптиве
- Роутер. Анимация при переходе между страницами
- Redux Thunk
