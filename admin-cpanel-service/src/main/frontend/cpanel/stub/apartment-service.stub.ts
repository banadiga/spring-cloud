import {ApartmentService} from '../app/apartment/apartment.service';
import {Apartment} from "../app/apartment/apartment";

export class ApartmentServiceStub extends ApartmentService {

  getApartmentById(id: string): Apartment {
    return (id !== "not-existing") ? new Apartment({
      location: 'My location',
      sqft: 'My sqft',
      price: 'My price',
      realtorName: 'My realtor name',
      mail: 'Email@company.com',
      phone: 'My phone',
    }) : null;
  }
}
