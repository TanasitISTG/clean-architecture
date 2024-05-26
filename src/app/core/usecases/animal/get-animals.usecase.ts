import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UseCase } from '../../../core/base/use-case';
import { AnimalModel } from '../../models/animal.model';
import { AnimalRepository } from '../../repositories/animal.repositoy';

@Injectable({
  providedIn: 'root'
})
export class GetAllAnimalsUseCase implements UseCase<void, AnimalModel[]> {

  constructor(private animalRepository: AnimalRepository) { }

  execute(): Observable<AnimalModel[]> {
    return this.animalRepository.getAnimals();
  }
}