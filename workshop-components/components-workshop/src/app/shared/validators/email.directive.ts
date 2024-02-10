import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appEmail]',
  standalone: true
})
export class EmailDirective implements Validator, OnChanges {
  @Input() appEmail: string[] = []
  constructor() { }
  validate(control: AbstractControl<any, any>): ValidationErrors | null {



    return null
  }
  ngOnChanges(changes: SimpleChanges): void {

  }
}
