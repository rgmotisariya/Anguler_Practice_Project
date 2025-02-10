import { Component } from '@angular/core';
import { NavbarComponent } from './MyComponent/navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports:[NavbarComponent]
})

export class AppComponent {
  title = 'SamudraTech';
}
