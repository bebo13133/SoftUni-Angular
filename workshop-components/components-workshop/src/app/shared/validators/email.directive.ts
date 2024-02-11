import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';
import { appEmailValidator } from './app-email-validator';

@Directive({
  selector: '[appEmail]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailDirective,
      multi: true
    }
  ]
})
export class EmailDirective implements Validator, OnChanges {
  @Input() appEmail: string[] = []
  validator: ValidatorFn = () => null
  constructor() { }
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    // return appEmailValidator(this.appEmail)

    return this.validator(control)

  }
  ngOnChanges(changes: SimpleChanges): void {
    const appEmailChanges = changes['appEmail']
    if (appEmailChanges) {
      this.validator = appEmailValidator(appEmailChanges.currentValue)
    }
  }
}
