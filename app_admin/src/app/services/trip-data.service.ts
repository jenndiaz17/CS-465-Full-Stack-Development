import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Trip } from '../models/trip';


@Injectable({
  providedIn: 'root'
})

export class TripDataService {

  constructor(private http: HttpClient) { }
  url = 'http://localhost:3000/api/trips';

  getTrips() : Observable<Trip[]> {
    // console.log('Inside tripDataService::getTrips');
    return this.http.get<Trip[]>(this.url);
  }

  addTrip(formData: Trip) : Observable<Trip> {
    return this.http.post<Trip>(this.url, formData);
  }

  getTrip(TripCode: string) : Observable<Trip[]> {
    // console.log('Inside tripDataService::getTrips');
    return this.http.get<Trip[]>(this.url + '/' + TripCode);
  }

  updateTrip(formData: Trip): Observable<Trip> {
    // console.log('Inside tripDataService::addTrips');
    return this.http.put<Trip>(this.url + '/' + formData.code, formData);
  }
}