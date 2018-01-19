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
    new Animal('Tiger', 'Frankie', 8, 'Carnivore', 'Tiger Kingdom', 8, 'Female', 'Pasta', 'Grey\'s Anatomy'),
    new Animal('Lion', 'Jimbo', 10, 'Carnivore', 'Lion Place', 4, 'Male', 'Pizza', 'Children'),
    new Animal('Elephant', 'Suzie', 8, 'Carnivore', 'Elephant Lane', 2, 'Female', 'Music', 'Coffee'),
    new Animal('Shark', 'John', 4, 'Carnivore', 'Aquarium', 1, 'Male', 'Soccer', 'Politics'),
    new Animal('Monkey', 'Milhouse', 4, 'Carnivore', 'Monkey Street', 8, 'Male', 'TV', 'John Stamos')
  ];

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }
}
