import { Component } from '@angular/core';
import { NavbarComponent } from './MyComponent/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./MyComponent/footer/footer.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [NavbarComponent, RouterOutlet, FooterComponent]
})

export class AppComponent {
  title = 'SamudraTech';
}
