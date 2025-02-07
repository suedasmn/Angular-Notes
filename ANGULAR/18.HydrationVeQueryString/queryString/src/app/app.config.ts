import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)
    ,provideRouter([
      {
        path: "product",
        loadComponent:() => import("./product/product.component")
        .then(c=> c.ProductComponent)
      }
   ], withComponentInputBinding() )]
};
