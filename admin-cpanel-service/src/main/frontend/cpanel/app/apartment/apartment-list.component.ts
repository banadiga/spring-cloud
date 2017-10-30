import {Component, OnInit} from '@angular/core';
import {ApartmentService} from './apartment.service';
import {Apartment} from './apartment';

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment-list.component.html',
  styleUrls: ['./apartment-list.component.css']
})
export class ApartmentListComponent implements OnInit {
  title = 'CPanel | Apartment';

  newApartment: Apartment = new Apartment();

  constructor(private apartmentService: ApartmentService) {
  }

  get apartments() {
    return this.apartmentService.getAllApartments();
  }

  addApartment() {
    this.apartmentService.addApartment(this.newApartment);
    this.newApartment = new Apartment();
  }

  removeApartment(apartment: Apartment) {
    this.apartmentService.deleteApartmentById(apartment.id);
  }

  ngOnInit() {
  }
}
