import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UseCase } from '../../../core/base/use-case';
import { AnimalModel } from '../../models/animal.model';
import { AnimalRepository } from '../../repositories/animal.repositoy';

@Injectable({
  providedIn: 'root'
})
export class GetAnimalByNameUseCase implements UseCase<string, AnimalModel> {

  constructor(private animalRepository: AnimalRepository) { }

  execute(param: string): Observable<AnimalModel> {
    return this.animalRepository.getAnimalByName(param);
  }
}