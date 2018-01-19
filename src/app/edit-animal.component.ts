import { Component, Input } from '@angular/core';
import { Animal } from './animal.model';

@Component ({
  selector: 'edit-animal',
  template: `
    <div class="form" *ngIf="childSelectedAnimal">
      <form>
        <label>Species: </label>
        <input [(ngModel)]="childSelectedAnimal.species">
        <label>Name: </label>
        <input [(ngModel)]="childSelectedAnimal.name">
        <label>Age: </label>
        <input [(ngModel)]="childSelectedAnimal.age">
        <label>Diet: </label>
        <input [(ngModel)]="childSelectedAnimal.diet">
        <label>Location: </label>
        <input [(ngModel)]="childSelectedAnimal.location">
        <label>Caretakers: </label>
        <input [(ngModel)]="childSelectedAnimal.caretakers">
        <label>Sex: </label>
        <input [(ngModel)]="childSelectedAnimal.sex">
        <label>Likes: </label>
        <input [(ngModel)]="childSelectedAnimal.likes">
        <label>Dislikes: </label>
        <input [(ngModel)]="childSelectedAnimal.dislikes">
      </form>
    </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;

}
