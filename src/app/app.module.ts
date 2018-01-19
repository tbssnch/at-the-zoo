import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AnimalComponent } from './animal-list.component';
import { EditAnimalComponent } from './edit-animal.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent, AnimalComponent, EditAnimalComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
