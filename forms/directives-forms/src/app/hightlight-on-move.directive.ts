import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appHightlightOnMove]',
  standalone: true
})
export class HightlightOnMoveDirective implements OnInit {

  constructor(private elRef: ElementRef) { }

ngOnInit(): void {
  this.elRef.nativeElement.style.backgroundColor= "red"

}
}
