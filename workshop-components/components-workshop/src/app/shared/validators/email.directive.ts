import { Directive } from '@angular/core';
import { AbstractControl, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appEmail]',
  standalone: true
})
export class EmailDirective implements Validator {

  constructor() { }
validate(control: AbstractControl<any, any>): ValidationErrors | null {


  
  return null
}
}
