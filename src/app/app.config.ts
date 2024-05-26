import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { AnimalImplementationRepository } from './data/repositories/animal/animal-implementation.repository';
import { AnimalRepository } from './core/repositories/animal.repositoy';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    { provide: AnimalRepository, useClass: AnimalImplementationRepository },
  ],
};
