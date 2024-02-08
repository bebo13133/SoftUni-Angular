import { Directive, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appMyStructural]',
  standalone: true
})
export class MyStructuralDirective implements OnInit , OnChanges{
@Input() appMyStructural:boolean = false;

  constructor() { }

ngOnChanges(changes: SimpleChanges): void {
  console.log(this.appMyStructural)
  console.log(changes)
  
}
ngOnInit(): void {
}
}
