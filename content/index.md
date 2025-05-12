---
title: Home
navigation: false
---

::hero
---
announcement:
  title: 'Release v0.0.28'
  icon: '🎉'
  to: https://github.com/avleonjs/avleon-core/releases/latest
  target: _blank
actions:
  - name: Documentation
    to: /getting-started/introduction
  - name: GitHub
    variant: outline
    to: https://github.com/avleonjs/avleon-core
    leftIcon: 'lucide:github'
---

#title
Welcome to AvleonJs

#description
Beautifully designed Nuxt Content template built with shadcn-vue. :br Customizable. Compatible. Open Source.
::

::div{class="border rounded-lg shadow-md"}
```ts [app.ts]
import { Avleon, ApiController, Get, Results } from "@avleon/core";

// Define a controller
@ApiController
class HelloController {
  @Get()
  sayHello() {
    return "Hello, Avleon!";
  }
}

// Create and start the application
const app = Avleon.createApplication();
app.useControllers([HelloController]);
app.run(); // or app.run(3000)
```
::
