import { Component } from '@angular/core';
import { GetAllAnimalsUseCase } from '../../domain/usecases/animal/get-animals.usecase';
import { AnimalModel } from '../../domain/models/animal.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-animal-list',
  standalone: true,
  imports: [CommonModule],
  providers: [GetAllAnimalsUseCase],
  templateUrl: './animal-list.component.html',
  styleUrl: './animal-list.component.scss'
})
export class AnimalListComponent {
  constructor(private getAllAnimal: GetAllAnimalsUseCase) { }

  animals: AnimalModel[] = [];

  ngOnInit() {
    this.getAllAnimal.execute().subscribe((data) => {
      this.animals = data;
    });
  }

  onSelectedAnimal(name: string) {
    console.log(name);
  }
}
