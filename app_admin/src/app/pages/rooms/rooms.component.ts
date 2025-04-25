import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {
  rooms = [
    {
      name: 'Ocean View Suite',
      capacity: 2,
      price: '$250/night',
      description: 'A beautiful suite with ocean views and a private balcony.',
      image: 'assets/images/first-class.jpg'
    },
    {
      name: 'Family Room',
      capacity: 4,
      price: '$180/night',
      description: 'Spacious room ideal for families.',
      image: 'assets/images/deluxe.jpg'
    },
    {
      name: 'Luxury Villa',
      capacity: 6,
      price: '$500/night',
      description: 'Premium villa with private pool, kitchen, and beach access.',
      image: 'assets/images/suite.jpg'
    }
  ];
}