**nuxt-server-client-init**

Пакет `nuxt-server-client-init` - это мощный инструмент, который может помочь вам улучшить производительность и масштабируемость вашего приложения Nuxt. Если вы ищете способ выполнить любые задачи, которые необходимо выполнить только один раз, когда ваше приложение запущено, этот пакет стоит рассмотреть.


**Важно:** В самом Nuxt экшен `nuxtServerInit` не работает в модулях Vuex. Пакет `nuxt-server-client-init` исправляет эту проблему и позволяет вам использовать экшен `nuxtServerInit` в модулях Vuex.

**Установка**

```
npm install nuxt-server-client-init
```

**Использование**

Чтобы использовать этот пакет, вам необходимо добавить его в свой файл `nuxt.config.js`:

```js
// nuxt.config.js

export default {
  modules: [
    'nuxt-server-client-init',
  ],
};
```

После этого вы сможете использовать экшены `nuxtClientInit` и `nuxtServerInit` в своем приложении Nuxt.


**Action `nuxtClientInit`**

Экшен `nuxtClientInit` выполняется на стороне клиента после того, как приложение было полностью загружено. Вы можете использовать его для выполнения любых задач, которые необходимо выполнить только один раз, когда приложение запущено.

Например, вы можете использовать `nuxtClientInit` для:

* Инициализации глобального состояния
* Загрузки данных из API
* Инициализации плагинов

**Action `nuxtServerInit`**

Экшен `nuxtServerInit` выполняется на стороне сервера перед отдачей HTML-кода страницы. Вы можете использовать его для выполнения любых задач, которые необходимо выполнить только один раз, когда страница загружается.

Вот пример использования экшенов:

```js
/module/index.js

const actions = {
  nuxtClientInit() {
    consola.success('client init');
  },
  nuxtServerInit() {
    consola.success('server init');
  },
};
```

**Как это поможет вам**

Пакет `nuxt-server-client-init` может помочь вам улучшить производительность и масштабируемость вашего приложения Nuxt. Он позволяет вам выполнять любые задачи, которые необходимо выполнить только один раз, когда приложение запущено, как на стороне клиента, так и на стороне сервера.

Вот несколько конкретных примеров того, как этот пакет может помочь вам:

* **Улучшение производительности:** Вы можете использовать `nuxtClientInit` для выполнения любых задач, которые не требуют взаимодействия с пользователем. Это может помочь улучшить производительность вашего приложения, поскольку эти задачи будут выполняться только один раз, когда приложение запущено.
* **Улучшение масштабируемости:** Вы можете использовать `nuxtServerInit` для выполнения любых задач, которые требуют доступа к данным из базы данных или API. Это может помочь улучшить масштабируемость вашего приложения, поскольку эти задачи будут выполняться только на сервере, а не на каждом клиентском устройстве.

