import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component ({
  selector: 'animal-list',
  template: `
    <div class="selector">
    <label>View: </label>
      <select (change)="onChange($event.target.value)">
        <option value="all">All</option>
        <option value="young">Young</option>
        <option value="adult">Adult</option>
      </select>
    </div>
    <div class="animal-list">
      <div class="animals" *ngFor="let animal of childAnimalList | animalAge:filterByAge">
        <ul>
          <li>Species: {{animal.species}} </li>
          <li>Name: {{animal.name}} </li>
          <li>Age: {{animal.age}} </li>
          <li>Diet: {{animal.diet}}</li>
          <li>Location: {{animal.location}}</li>
          <li>Caretakers: {{animal.caretakers}}</li>
          <li>Sex: {{animal.sex}}</li>
          <li>Likes: {{animal.likes}}</li>
          <li>Dislikes: {{animal.dislikes}}</li>
        </ul>
        <button (click)="editButton(animal)">Edit</button>
      </div>
    </div>
  `
})

export class AnimalComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  filterByAge: string = "all";

  onChange(optionFromMenu) {
    this.filterByAge = optionFromMenu;
  }

  editButton(animalEdit: Animal) {
    this.clickSender.emit(animalEdit);
  }
}
