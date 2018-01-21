import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
      <link href="https://fonts.googleapis.com/css?family=Press+Start+2P|Roboto+Condensed" rel="stylesheet">
      <div class="container">
      <img src="assets/elephant-head.svg">
        <h1>AT THE ZOO</h1>
        <div class="animal-list">
          <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
        </div>
        <div class="form-container">
          <div class="add-form">
          <add-animal (newAnimalSender)="addAnimal($event)"></add-animal>
          </div>
          <div class="edit-form">
            <edit-animal [childSelectedAnimal]="selectedAnimal" (clickSender)="doneButton($event)"></edit-animal>
          </div>
        </div>
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
    new Animal('Shark', 'John', 1, 'Carnivore', 'Aquarium', 1, 'Male', 'Soccer', 'Politics'),
    new Animal('Monkey', 'Milhouse', 4, 'Carnivore', 'Monkey Street', 8, 'Male', 'TV', 'John Stamos')
  ];

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  doneButton() {
    this.selectedAnimal = null;
  }

  addAnimal(newAnimalFromChild: Animal) {
    this.masterAnimalList.push(newAnimalFromChild);
  }

}
