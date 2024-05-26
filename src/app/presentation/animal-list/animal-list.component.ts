import { Component, OnDestroy, OnInit } from '@angular/core';
import { AnimalModel } from '../../core/models/animal.model';
import { GetAllAnimalsUseCase } from '../../core/usecases/animal/get-animals.usecase';
import { ReplaySubject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-animal-list',
  standalone: true,
  imports: [],
  providers: [GetAllAnimalsUseCase],
  templateUrl: './animal-list.component.html',
  styleUrl: './animal-list.component.scss'
})
export class AnimalListComponent implements OnInit, OnDestroy {
  constructor(private getAllAnimal: GetAllAnimalsUseCase) { }

  animals: AnimalModel[] = [];
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  ngOnInit() {
    this.getAllAnimal.execute().pipe(takeUntil(this.destroyed$)).subscribe((data) => {
      this.animals = data;
    });
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
