import { Injectable } from '@angular/core';
import { AnimalRepository } from '../../../domain/repositories/animal.repositoy';
import { Observable, filter, from, map, toArray } from 'rxjs';
import { AnimalModel } from '../../../domain/models/animal.model';
import { AnimalImplementationRepositoryMapper } from './animal.mapper';
import { AnimalEntity } from './animal.entity';

@Injectable({
  providedIn: 'root',
})
export class AnimalImplementationRepository extends AnimalRepository {
  private mapper = new AnimalImplementationRepositoryMapper();

  animals: AnimalEntity[] = [
    { id: 1, name: 'Dog', age: 10 },
    { id: 2, name: 'Cat', age: 5 },
    { id: 3, name: 'Bird', age: 3 },
    { id: 4, name: 'Fish', age: 1 },
  ];

  getAnimals(): Observable<AnimalModel[]> {
    return from(this.animals).pipe(map(this.mapper.mapFrom)).pipe(toArray());
  }
  getAnimalByName(name: string): Observable<AnimalModel> {
    return from(this.animals)
      .pipe(filter((elephant: AnimalEntity) => elephant.name === name))
      .pipe(map(this.mapper.mapFrom));
  }
}