---
title: Home
navigation: false
---

::hero
---
announcement:
  title: 'Release v0.0.36'
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
AVLEON

#description
A powerful TypeScript-based web framework built on Fastify.

::

::div{class="border border-red-50 rounded-xl shadow-xl bg-black bg-opacity-40 backdrop-filter backdrop-blur-md overflow-hidden"}

::code-group
```ts [welcome.controller.ts]
import { ApiController, Get } from "@avleon/core";

@ApiController
export class WelcomeController {
  @Get()
  sayHello() {
    return "Hello, Avleon!";
  }
}
```

```ts [app.ts]
import { Avleon } from "@avleon/core";
import { WelcomeController } from "welcome.controller";


const app = Avleon.createApplication();
app.useControllers([ WelcomeController ]);
app.run(); // or app.run(4000)
```
::
::

        
