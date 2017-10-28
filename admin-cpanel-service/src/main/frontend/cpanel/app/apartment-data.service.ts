import {Injectable} from '@angular/core';
import {Apartment} from "./apartment";

@Injectable()
export class ApartmentDataService {

  // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId: number = 0;

  // Placeholder for apartment's
  apartments: Apartment[] = [];

  constructor() {
  }

  // Simulate POST /api/apartments
  addApartment(apartment: Apartment): ApartmentDataService {
    if (!apartment.id) {
      apartment.id = ++this.lastId;
    }
    this.apartments.push(apartment);
    return this;
  }

  // Simulate DELETE /api/apartments/:id
  deleteApartmentById(id: number): ApartmentDataService {
    this.apartments = this.apartments
      .filter(apartment => apartment.id !== id);
    return this;
  }

  // Simulate PUT /api/apartments/:id
  updateApartmentById(id: number, values: Object = {}): Apartment {
    let apartment = this.getApartmentById(id);
    if (!apartment) {
      return null;
    }
    Object.assign(apartment, values);
    return apartment;
  }

  // Simulate GET /api/apartments
  getAllApartments(): Apartment[] {
    return this.apartments;
  }

  // Simulate GET /api/apartments/:id
  getApartmentById(id: number): Apartment {
    return this.apartments
      .filter(apartment => apartment.id === id)
      .pop();
  }
}
