import { ApplicationConfig } from '@angular/core';
import { provideRouter, withEnabledBlockingInitialNavigation, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';

export const APP_ROUTER = provideRouter(
    routes,
    withEnabledBlockingInitialNavigation(),
    withInMemoryScrolling({
        anchorScrolling: 'enabled'
    })
);

export const appConfig: ApplicationConfig = {
    providers: [provideRouter(routes), APP_ROUTER]
};


