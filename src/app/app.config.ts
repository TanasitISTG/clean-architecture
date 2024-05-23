import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { AnimalRepository } from './domain/repositories/animal.repositoy';
import { AnimalImplementationRepository } from './data/repositories/animal/animal-implementation.repository';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    { provide: AnimalRepository, useClass: AnimalImplementationRepository },
  ],
};
