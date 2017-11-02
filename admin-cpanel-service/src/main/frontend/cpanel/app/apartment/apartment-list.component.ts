import {Component, OnInit} from '@angular/core';
import {ApartmentService} from './apartment.service';
import {Apartment} from './apartment';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartment-list.component.html',
  styleUrls: ['./apartment-list.component.css']
})
export class ApartmentListComponent implements OnInit {
  title = 'CPanel | Apartments';

  constructor(private apartmentService: ApartmentService) {
  }

  get apartments() {
    return this.apartmentService.getAllApartments();
  }

  removeApartment(apartment: Apartment) {
    this.apartmentService.deleteApartmentById(apartment.id);
  }

  ngOnInit() {
  }
}
