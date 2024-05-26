import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalModel } from '../../core/models/animal.model';
import { GetAllAnimalsUseCase } from '../../core/usecases/animal/get-animals.usecase';

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
