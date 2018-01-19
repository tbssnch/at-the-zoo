import { Component, Input } from '@angular/core';
import { Animal } from './animal.model';

@Component ({
  selector: 'animal-list',
  template: `
    <div class="row animal-list">
      <div class="animals col-lg-4 center-block" *ngFor="let animal of childAnimalList">
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
      </div>
    </div>
  `
})

export class AnimalComponent {
  @Input() childAnimalList: Animal[];
}
