import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutComponent } from './about/about.component'
import {NavigationComponent} from './navigation/navigation.component'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationComponent,AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'components-demo';
}
