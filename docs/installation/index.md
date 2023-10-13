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
import { createApp } from 'vue'
import App from './App.vue'

import plugin from '@yourname/yourlibrary'

createApp(App)
  .use(plugin)
  .mount('#app')
```