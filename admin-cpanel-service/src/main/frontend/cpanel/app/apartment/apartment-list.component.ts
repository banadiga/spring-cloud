import {Component, OnInit} from '@angular/core';
import {ApartmentService} from "./apartment.service";
import {Apartment} from "./apartment";

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment-list.component.html',
  styleUrls: ['./apartment-list.component.css'],
  providers: [ApartmentService]
})
export class ApartmentListComponent implements OnInit {
  title = 'Administrator CPanel | Apartment';

  newApartment: Apartment = new Apartment();

  constructor(private apartmentService: ApartmentService) {
  }

  addApartment() {
    this.apartmentService.addApartment(this.newApartment);
    this.newApartment = new Apartment();
  }

  removeApartment(todo: Apartment) {
    this.apartmentService.deleteApartmentById(todo.id);
  }

  get apartments() {
    return this.apartmentService.getAllApartments();
  }

  ngOnInit() {
  }
}
