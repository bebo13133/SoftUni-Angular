import { Directive, Input, OnChanges, OnInit, Optional, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyStructural]',
  standalone: true
})
export class MyStructuralDirective implements OnChanges {
  @Input() appMyStructural: boolean = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) { }

  ngOnChanges(changes: SimpleChanges): void {

    this.appMyStructural ? this.vcRef.createEmbeddedView(this.templateRef) : this.vcRef.clear()

  }

}
