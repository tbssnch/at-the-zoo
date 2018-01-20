import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './animal.model';

@Pipe ({
  name: 'animalAge',
  pure: false
})

export class AnimalAgePipe implements PipeTransform {
  transform(input: Animal[], desiredAge) {
    const output: Animal[] = [];
    if (desiredAge === "young") {
      for (let i = 0; i < input.length; i++) {
        if(input[i].age < 2) {
          output.push(input[i]);
    }
      }
      return output;
    } else if (desiredAge === "adult") {
      for (let i = 0; i < input.length; i++) {
        if(input[i].age > 2) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
