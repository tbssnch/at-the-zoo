import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component ({
  selector: 'add-animal',
  template: `
      <div class="add-form">
        <label>Species: </label>
        <input #newSpecies>
        <label>Name: </label>
        <input #newName>
        <label>Age: </label>
        <input #newAge type="number">
        <label>Diet: </label>
        <input #newDiet>
        <label>Location: </label>
        <input #newLocation>
        <label>Caretakers: </label>
        <input #newCaretakers type="number">
        <label>Sex: </label>
        <input #newSex>
        <label>Likes: </label>
        <input #newLikes>
        <label>Dislikes: </label>
        <input #newDislikes>
        <button (click)="addAnimal(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value)">Add</button>
      </div>
  `
})

export class AddAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  addAnimal(species, name, age, diet, location, caretakers, sex, likes, dislikes) {
    let newAnimal: Animal = new Animal(species, name, parseInt(age), diet, location, caretakers, sex, likes, dislikes);
    this.newAnimalSender.emit(newAnimal);
  }
}
