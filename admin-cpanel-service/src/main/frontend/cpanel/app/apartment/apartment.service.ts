import {Injectable} from '@angular/core';
import {Apartment} from './apartment';

@Injectable()
export class ApartmentService {

  // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId: number = 0;

  // Placeholder for apartment's
  apartments: Apartment[] = [];

  constructor() {
  }

  // Simulate POST /api/apartments
  addApartment(apartment: Apartment): Apartment {
    if (!apartment.id) {
      apartment.id = ++this.lastId;
    }
    this.apartments.push(apartment);
    return apartment;
  }

  // Simulate DELETE /api/apartments/:id
  deleteApartmentById(id: number): void {
    this.apartments = this.apartments
      .filter(apartment => apartment.id !== id);
  }

  // Simulate PUT /api/apartments/:id
  updateApartmentById(id: number, values: Object = {}) {
    let apartment = this.getApartmentById(id);
    if (!apartment) {
      return;
    }
    Object.assign(apartment, values);
  }

  // Simulate GET /api/apartments
  getAllApartments(): Apartment[] {
    return this.apartments;
  }

  // Simulate GET /api/apartments/:id
  getApartmentById(id: number): Apartment {
    let item = this.apartments
      .filter(apartment => apartment.id === id)
      .pop();
    return item ? item : null;
  }
}
