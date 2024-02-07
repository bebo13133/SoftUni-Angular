import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHightlightOnMove]',
  standalone: true
})
export class HightlightOnMoveDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

ngOnInit(): void {
  this.elRef.nativeElement.style.backgroundColor= "red"
this.renderer.setStyle(this.elRef.nativeElement, "backgroundColor","blue")
}
}
