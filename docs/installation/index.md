---
next:
  text: 'Input Text'
  link: '/components/input-text/index'
---
# Instalation

### Vue


Inside your project run command:

```sh
npm install @martinsagat/vue-components
```

Include library into a Vue project:


```js
import { createApp } from 'vue';
import App from './App.vue';

// import library
import plugin from '@martinsagat/vue-components';
// import styles
import '@martinsagat/vue-components/dist/library.mjs.css';

createApp(App)
  .use(plugin) // use library inside the app
  .mount('#app')
```