import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { FooterComponent } from './shared/footer/footer.component';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};
