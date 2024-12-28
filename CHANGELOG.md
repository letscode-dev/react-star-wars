# CHANGELOG

> [!TIP]  
> Text Tip: [[v1.1] [2021-07-16]](https://github.com/dev-pandaren/react-star-wars/commit/6d25325918058290dca92822e1df30012736a876)


## VERSION 1.x

### [[v1.1] [2021-07-16]](https://github.com/dev-pandaren/react-star-wars/commit/6d25325918058290dca92822e1df30012736a876)

<details><summary>Изменения</summary>

- Исправлена функция `getId` для получения ID персонажа по URL: не было проверки url на наличие HTTP или HTTPS
</details>

### [[v1.2] [2021-08-09]](https://github.com/dev-pandaren/react-star-wars/commit/c2d59d6606394cddeafabfb47a33596bc2023dde)

<details><summary>Изменения</summary>

- Изменено название переменной `GUIDE_IMG_EXTESION` > `GUIDE_IMG_EXTENSION`
</details>

### [[v1.3] [2022-01-24]](https://github.com/dev-pandaren/react-star-wars/commit/451a21c2ce02e58717ba08f291ff10286c012176)

<details><summary>Изменения</summary>

- Обновлены все NPM пакеты в package.json
- Обновлен React Router до версии 6
- `useHistory()` заменен на `useNavigate()`
- `BrowserRouter` вынесен на уровень выше
- `<Switch>` заменен на `<Routes>`
- `match` заменен на `useParams()`
</details>

### [[v1.4] [2022-01-24]](https://github.com/dev-pandaren/react-star-wars/commit/ee58140723211f2052d5b73b8cb74474ac5c4315)

<details><summary>Изменения</summary>

- Рефакторинг `setErrorApi()`
</details>

### [[v1.5] [2022-01-24]](https://github.com/dev-pandaren/react-star-wars/commit/5f7d36e624153fec3b1ecbf02a54f4e29cc8a473)

<details><summary>Изменения</summary>

- Удален второй аргумент у `slice()` - по умолчанию подставляется длина строки
- Более компактная запись для `setPersonFavorite()`
</details>

---

## VERSION 2.x

### [[v2.1] [2024-12-28]](https://github.com/letscode-dev/react-star-wars/pull/3/commits/9bf316046c8dc98a4c023aae4d4c33476e33943f)

<details><summary>Изменения</summary>

- Обновлены пакеты в package.json
- Удален пакет `redux-devtools-extension`. Были ошибки при установке
- Мелкие правки в файлах
</details>

<details><summary>Файлы</summary>

> src\index.js
- Устаревший метод `render` заменен на `createRoot`

> src\utils\network.js
- Удалена функция `changeHTTP`. Теперь менять "HTTP" на "HTTPS" не нужно, она уже по умолчанию "HTTPS"
- Добавлена обработка ошибок в функцию `makeConcurrentRequest`

> src\store\store.js
- Удален код для пакета `composeWithDevTools`, т.к. пакет был удален

> src\constants\api.js
- Удалены константы `HTTPS` и `HTTP`, т.к. не используются
- Адрес в `SWAPI_ROOT` заменен на "https://swapi.py4e.com/api", т.к. "https://swapi.dev/api/" не работает. Когда заработает "https://swapi.dev/api/" можно поменять обратно.

> src\hooks\useQueryParams.js
- Устаревший метод `useLocation` заменен на `useSearchParams`

> src\services\getPeopleData.js
- Добавлена функция `getPeopleId`
- Удалены функции `checkProtocol` и `getId`

> src\components\Favorite\Favorite.jsx
- Скорректировано отображение counter
</details>
