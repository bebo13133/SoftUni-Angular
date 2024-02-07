import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHightlightOnMove]',
  standalone: true
})
export class HightlightOnMoveDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    //   this.elRef.nativeElement.style.backgroundColor= "red"
    // this.renderer.setStyle(this.elRef.nativeElement, "backgroundColor","blue")
    this.renderer.listen(
      this.elRef.nativeElement,
      "mouseenter",
      this.mouseEnterEven.bind(this)
    )
    this.renderer.listen(
      this.elRef.nativeElement,
      "mouseleave",
      this.mouseLeaveEven.bind(this)
    )
  }
  mouseEnterEven(event: MouseEvent): void {
    console.log("enter", event)
    this.renderer.setStyle(this.elRef.nativeElement, "backgroundColor","red")

  }
  mouseLeaveEven(event: MouseEvent): void {
    this.renderer.setStyle(this.elRef.nativeElement, "backgroundColor","blue")

    console.log("enter", event)
  }
}
