import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripCardComponent } from '../trip-card/trip-card.component';

// Importing Trip Model and Data Service
import { Trip } from '../models/trip';
import { TripDataService } from '../services/trip-data.service';

// Import Router for navigation
import { Router } from '@angular/router';

@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, TripCardComponent],
  templateUrl: './trip-listing.component.html',
  styleUrls: ['./trip-listing.component.css'],
  providers: [TripDataService]
})
export class TripListingComponent implements OnInit {

  trips!: Trip[];
  message: string = '';

  //  Constructor with both services injected
  constructor(
    private tripDataService: TripDataService,
    private router: Router
  ) {
    console.log('trip-listing constructor');
  }

  //  Add Trip button handler
  public addTrip(): void {
    this.router.navigate(['add-trip']);
  }

  //  Fetch trip data from the backend
  private getStuff(): void {
    this.tripDataService.getTrips()
      .subscribe({
        next: (value: any) => {
          this.trips = value;
          if (value.length > 0) {
            this.message = 'There are ' + value.length + ' trips available.';
          } else {
            this.message = 'There were no trips retrieved from the database';
          }
          console.log(this.message);
        },
        error: (error: any) => {
          console.log('Error: ' + error);
        }
      });
  }

  //  Run once on component init
  ngOnInit(): void {
    console.log('ngOnInit');
    this.getStuff();
  }
}
