import {Component, OnInit} from '@angular/core';
import {ApartmentService} from './apartment.service';
import {Apartment} from './apartment';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AlertService} from '../alert/alert.service';

@Component({
  selector: 'app-new-apartment',
  templateUrl: './apartment-new.component.html',
  styleUrls: ['./apartment-new.component.css']
})
export class ApartmentNewComponent implements OnInit {
  title = 'CPanel | New apartment';

  apartment: FormGroup;

  constructor(private router: Router,
              private apartmentService: ApartmentService,
              private alertService: AlertService) {
  }

  ngOnInit() {
    this.apartment = new FormGroup({
      location: new FormControl('', [Validators.required, Validators.minLength(2)]),
      price: new FormControl('', [Validators.required, Validators.minLength(2)]),
      sqft: new FormControl('', [Validators.required, Validators.minLength(2)]),
      phone: new FormControl('', [Validators.required, Validators.minLength(2)]),
      realtorName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      mail: new FormControl('', [Validators.required, Validators.minLength(2)]),
    });
  }

  onSubmit() {
    let newApartment = new Apartment(this.apartment.value);
    console.log('Create new apartment', this.apartmentService.addApartment(newApartment));
    this.alertService.success('New apartment created success!', true);
    this.router.navigateByUrl('apartments');
  }
}
