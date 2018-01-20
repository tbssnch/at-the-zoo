import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AnimalComponent } from './animal-list.component';
import { EditAnimalComponent } from './edit-animal.component';
import { FormsModule } from '@angular/forms';
import { AddAnimalComponent } from './add-animal.component';


@NgModule({
  declarations: [
    AppComponent, AnimalComponent, EditAnimalComponent, AddAnimalComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
