import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-travel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})

export class TravelComponent {
  trips = [
    {
      name: 'Gale Reef',
      resort: 'Emerald Bay, 3 stars',
      length: '4 nights / 5 days',
      price: '$799.00 per person',
      description: 'Gale Reef - Sed et augue lorem...',
      image: 'assets/images/reef1.jpg'
    },
    {
      name: 'Dawson\'s Reef',
      resort: 'Blue Lagoon, 4 stars',
      length: '4 nights / 5 days',
      price: '$1,199.00 per person',
      description: 'Dawson\'s Reef - Integer magna leo...',
      image: 'assets/images/reef2.jpg'
    },
    {
      name: 'Claire\'s Reef',
      resort: 'Coral Sands, 5 stars',
      length: '4 nights / 5 days',
      price: '$1,999.00 per person',
      description: 'Claire\'s Reef - Donec sed felis risus...',
      image: 'assets/images/reef3.jpg'
    },
    {
      name: 'Mega Reef Dive',
      resort: 'Sunset Cove, 5 stars',
      length: '5 nights / 6 days',
      price: '$2,499.00 per person',
      description: 'The ultimate reef diving adventure...',
      image: 'assets/images/reef3.jpg'  
    }
  ];
}