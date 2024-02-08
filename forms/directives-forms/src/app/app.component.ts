import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HightlightOnMoveDirective } from './hightlight-on-move.directive';
import { MyRouterLinkDirective } from './my-router-link.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HightlightOnMoveDirective,MyRouterLinkDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'directives-forms';
}
