import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HightlightOnMoveDirective } from './hightlight-on-move.directive';
import { MyRouterLinkDirective } from './my-router-link.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HightlightOnMoveDirective, MyRouterLinkDirective, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isShown = false;
  title = 'directives-forms';
  toggle(): void {
    this.isShown = !this.isShown;
  }
}
