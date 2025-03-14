import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHighlightOptions } from 'ngx-highlightjs';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHighlightOptions({
      coreLibraryLoader: () => import('highlight.js/lib/core'),

      languages: {

        typescript: () => import('highlight.js/lib/languages/typescript'),

        css: () => import('highlight.js/lib/languages/css'),

        xml: () => import('highlight.js/lib/languages/xml')

      },

      themePath: 'assets/styles/androidstudio.css'
    })
  ]
};
