# Host app

>Micro Frontends. ModuleFederation.
* React
* TypeScript
* MobX

## Description
* `HOST`(облочка) - главное приложение
* `remote` - дочернее приложение(компонент). Асинхронно подгружается. Используеться в главном приложении.
* `shared` - общие библиотеки(пакеты) и типы для работы всего приложениия.

## Build
`HOST`, `remote` - расположены в независимых репозиториях

### Remote
Независимое дочернее приложение. Распологаеться в отдельном репозитории.
При необходимости использует API главного приложения.

### Регистрация `remote` приложения в `host`
Шаблон для создание приложения находится в папке `remote_template`.
1. Создать проект в папке `remotes/remote_[name]`
2. Зарегистрировать приложение в `Router`
3. Создать `docker/remote_[name].Dockerfile`
4. Share remote routes?
5. Проксировать путь `/remote_[name]` в `nginx`

### Структура страницы для внешнего приложения
* toolbar - содержит дополнительные или ссылки для подразделов
* app - приложение(компонент). Можно экспортировать несколько.
* карточка для главной

## Разработка

### Старт
`Remote` можно запускать отдельно. Для взаимодествия с общими данными необходимо работать через `host` приложение.
Шаблон для создание приложения находится в папке `remote_template`.

### ENV var
Для разработки необходимо указать ссылки на модули и API в `host/.env` и `remote_[name]/.env`:

```bash
MODULE_[NAME]_URL=http://localhost:5003/remoteEntry.js
API_URL=http://localhost:5001
```
`webpack`:
```js
const app_tmpl_url = process.env.MODULE_[NAME]_URL || '/remote_[name]/remoteEntry.js';
```
---
`ʕ ᵔᴥᵔ ʔ`
