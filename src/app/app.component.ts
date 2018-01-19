import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
      <div class="container">
        <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
        <edit-animal [childSelectedAnimal]="selectedAnimal"></edit-animal>
      </div>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'at-the-zoo';
  selectedAnimal = null;
  masterAnimalList: Animal [] = [
    new Animal('Tiger', 'Frankie', 8, 'Carnivore', 'Tiger Kingdom', 8, 'Female', 'Pasta', 'Grey\'s Anatomy')
  ];
  
  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }
}
