import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { AnimalImplementationRepository } from './data/repositories/animal/animal-implementation.repository';
import { AnimalRepository } from './core/repositories/animal.repositoy';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    { provide: AnimalRepository, useClass: AnimalImplementationRepository },
  ],
};
