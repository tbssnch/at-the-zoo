import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component ({
  selector: 'edit-animal',
  template: `
    <div class="edit-form" *ngIf="childSelectedAnimal">
        <h3>Edit Animal</h3>
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
        <button (click)="doneButton()">Done</button>
    </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() clickSender = new EventEmitter();

  doneButton() {
    this.clickSender.emit();
  }
}
