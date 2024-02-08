import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HightlightOnMoveDirective } from './hightlight-on-move.directive';
import { MyRouterLinkDirective } from './my-router-link.directive';
import { CommonModule } from '@angular/common';
import { MyStructuralDirective } from './my-structural.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HightlightOnMoveDirective, MyRouterLinkDirective, CommonModule,MyStructuralDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isShown:boolean = false;
  title = 'directives-forms';
  toggle(): void {
    this.isShown = !this.isShown;
  }
}
