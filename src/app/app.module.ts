import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AnimalComponent } from './animal-list.component';
import { EditAnimalComponent } from './edit-animal.component';
import { FormsModule } from '@angular/forms';
import { AddAnimalComponent } from './add-animal.component';
import { AnimalAgePipe } from './animal-age.pipe';


@NgModule({
  declarations: [
    AppComponent, AnimalComponent, EditAnimalComponent, AddAnimalComponent, AnimalAgePipe
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
