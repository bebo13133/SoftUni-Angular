import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appMyRouterLink]',
  standalone: true
})
export class MyRouterLinkDirective implements OnInit {
  @Input() appMyRouterLink: string = ''
  constructor(private el: ElementRef, private render: Renderer2, private router: Router) { }

  ngOnInit(): void {
    this.render.listen(
      this.el.nativeElement,
      'click',
      this.clickHandler.bind(this)
    )
  }
  clickHandler(event: MouseEvent): void {
    this.router.navigate([this.appMyRouterLink])
  }
}
