import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { AppInterceptor  } from '../app/app.interceptor';

// import { AppInterceptor, apiInterceptorProvider } from './app.interceptor';
// import { provideHttpClient, withInterceptors } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), 
    importProvidersFrom(HttpClientModule),
  {provide: HTTP_INTERCEPTORS,
    multi:true,
    useClass: AppInterceptor}
  ]
};
