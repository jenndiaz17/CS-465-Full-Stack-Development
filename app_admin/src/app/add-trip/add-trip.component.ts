import { Component, OnInit } from '@angular/core'; 
import { CommonModule } from '@angular/common'; 
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from "@angular/router"; 
import { TripDataService } from '../services/trip-data.service'; 

@Component({ 
  selector: 'app-add-trip', 
  standalone: true, 
  imports: [CommonModule, ReactiveFormsModule], 
  templateUrl: './add-trip.component.html', 
  styleUrls: ['./add-trip.component.css']  // ✅ fixed typo from styleUrl to styleUrls
}) 
export class AddTripComponent implements OnInit { 
  addForm!: FormGroup; 
  submitted = false; 

  constructor( 
    private formBuilder: FormBuilder, 
    private router: Router, 
    private tripService: TripDataService 
  ) { } 

  ngOnInit(): void { 
    this.addForm = this.formBuilder.group({ 
      _id: [], 
      code: ['', Validators.required], 
      name: ['', Validators.required], 
      length: ['', Validators.required], 
      start: ['', Validators.required], 
      resort: ['', Validators.required], 
      perPerson: ['', Validators.required], 
      image: ['', Validators.required], 
      description: ['', Validators.required], 
    }); 
  } 

  public onSubmit(): void { 
    this.submitted = true; 
    console.log('Form submitted:', this.addForm.value);  //  for debugging

    if (this.addForm.valid) { 
      this.tripService.addTrip(this.addForm.value).subscribe({ 
        next: (data: any) => { 
          console.log('Trip added:', data); 
          this.router.navigate(['/']);  // 
        }, 
        error: (error: any) => { 
          console.error('Error:', error); 
        } 
      }); 
    }
  } 

  // allows template access to form controls
  get f() { 
    return this.addForm.controls; 
  } 
}
