import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnimalListComponent } from './presentation/animal-list/animal-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AnimalListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'clean-architecture';
}
