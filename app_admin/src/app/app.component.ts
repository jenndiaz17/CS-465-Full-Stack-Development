import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'
import { NavbarComponent } from './navbar/navbar.component';




@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Travlr Getaways Admin!';
}
