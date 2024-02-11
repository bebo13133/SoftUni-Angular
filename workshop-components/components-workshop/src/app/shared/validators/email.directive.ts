import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';
import { appEmailValidator } from './app-email-validator';

@Directive({
  selector: '[appEmail]',
  standalone: true
})
export class EmailDirective implements Validator, OnChanges {
  @Input() appEmail: string[] = []
  validator: ValidatorFn =()=> null
  constructor() { }
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    // return appEmailValidator(this.appEmail)

return this.validator(control)

  }
  ngOnChanges(changes: SimpleChanges): void {
    const appEmailChanges = changes['appEmail']
if(appEmailChanges){
this.validator = appEmailValidator(appEmailChanges.currentValue)
}
  }
}
