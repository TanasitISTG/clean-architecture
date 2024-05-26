import { Injectable } from '@angular/core';
import { Observable, from, map, mergeMap, toArray } from 'rxjs';
import { AnimalImplementationRepositoryMapper } from './animal.mapper';
import { AnimalEntity } from './animal.entity';
import { AnimalModel } from '../../../core/models/animal.model';
import { AnimalRepository } from '../../../core/repositories/animal.repositoy';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AnimalImplementationRepository extends AnimalRepository {
  private mapper = new AnimalImplementationRepositoryMapper();

  constructor(private http: HttpClient) {
    super();
  }

  getAnimals(): Observable<AnimalModel[]> {
    return this.http
      .get<AnimalEntity[]>(
        'https://6653b5ca1c6af63f4675625d.mockapi.io/api/v1/animals'
      )
      .pipe(
        mergeMap((animals: AnimalEntity[]) => from(animals)),
        map(this.mapper.mapFrom),
        toArray()
      );
  }
  getAnimalByName(name: string): Observable<AnimalModel> {
    return this.http
      .get<AnimalEntity>(
        `https://6653b5ca1c6af63f4675625d.mockapi.io/api/v1/animals/${name}`
      )
      .pipe(map(this.mapper.mapFrom));
  }
}
