import { Routes } from '@angular/router';
import { AddTripComponent } from './add-trip/add-trip.component';
import { TripListingComponent } from './trip-listing/trip-listing.component';
import { EditTripComponent } from './edit-trip/edit-trip.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { TravelComponent } from './pages/travel/travel.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { AdminComponent } from './pages/admin/admin.component';

export const routes: Routes = [
  { path: '', component: TripListingComponent, pathMatch: 'full' },
  { path: 'add-trip', component: AddTripComponent },
  { path: 'edit-trip', component: EditTripComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'travel', component: TravelComponent },
  { path: 'rooms', component: RoomsComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'faqs', component: FaqsComponent },
  { path: 'admin', component: AdminComponent }
];