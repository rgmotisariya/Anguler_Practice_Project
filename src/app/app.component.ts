import { Component } from '@angular/core';
import { NavbarComponent } from './MyComponent/navbar/navbar.component';
import { ServiceComponent } from "./pages/service/service.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [NavbarComponent, ServiceComponent]
})

export class AppComponent {
  title = 'SamudraTech';
}
