### [[v0.1.1] [2021-07-16]](https://github.com/dev-pandaren/react-star-wars/commit/6d25325918058290dca92822e1df30012736a876)
- Исправлена функция `getId` для получения ID персонажа по URL: не было проверки url на наличие HTTP или HTTPS

### [[v0.1.2] [2021-08-09]](https://github.com/dev-pandaren/react-star-wars/commit/c2d59d6606394cddeafabfb47a33596bc2023dde)
- Изменено название переменной `GUIDE_IMG_EXTESION` > `GUIDE_IMG_EXTENSION`

### [[v0.2.0] [2022-01-24]](https://github.com/dev-pandaren/react-star-wars/commit/451a21c2ce02e58717ba08f291ff10286c012176)
- Обновлены все NPM пакеты в package.json
- Обновлен React Router до версии 6
- `useHistory()` заменен на `useNavigate()`
- `BrowserRouter` вынесен на уровень выше
- `<Switch>` заменен на `<Routes>`
- `match` заменен на `useParams()`

### [[v0.2.1] [2022-01-24]](https://github.com/dev-pandaren/react-star-wars/commit/ee58140723211f2052d5b73b8cb74474ac5c4315)
- Рефакторинг `setErrorApi()`

### [[v0.2.2] [2022-01-24]](https://github.com/dev-pandaren/react-star-wars/commit/5f7d36e624153fec3b1ecbf02a54f4e29cc8a473)
- Удален второй аргумент у `slice()` - по умолчанию подставляется длина строки
- Более компактная запись для `setPersonFavorite()`
