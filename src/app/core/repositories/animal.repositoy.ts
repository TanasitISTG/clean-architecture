import { Observable } from 'rxjs';
import { AnimalModel } from '../models/animal.model';

export abstract class AnimalRepository {
    abstract getAnimals(): Observable<AnimalModel[]>;
    abstract getAnimalByName(name: string): Observable<AnimalModel>;
}