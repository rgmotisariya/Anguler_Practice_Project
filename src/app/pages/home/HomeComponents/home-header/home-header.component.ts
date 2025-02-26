import { Component } from '@angular/core';
import {  CommonModule} from '@angular/common'
@Component({
  standalone:true,
  selector: 'app-home-header',
  imports:[CommonModule],
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.css']
})
export class HomeHeaderComponent  {
  backgroundImage = "Homepage-Banner-02.png";

}
