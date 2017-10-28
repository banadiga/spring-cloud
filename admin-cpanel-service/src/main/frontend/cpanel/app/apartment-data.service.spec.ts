import {inject, TestBed} from '@angular/core/testing';

import {ApartmentDataService} from './apartment-data.service';
import {Apartment} from "./apartment";

describe('ApartmentDataService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApartmentDataService]
    });
  });

  it('should ...', inject([ApartmentDataService], (service: ApartmentDataService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getAllApartments()', () => {

    it('should return an empty array by default', inject([ApartmentDataService], (service: ApartmentDataService) => {
      expect(service.getAllApartments()).toEqual([]);
    }));

    it('should return all apartments', inject([ApartmentDataService], (service: ApartmentDataService) => {
      let apartment1 = new Apartment({location: 'location 1'});
      let apartment2 = new Apartment({location: 'location 2'});
      service.addApartment(apartment1);
      service.addApartment(apartment2);
      expect(service.getAllApartments()).toEqual([apartment1, apartment2]);
    }));

  });

  describe('#save(apartment)', () => {

    it('should automatically assign an incrementing id', inject([ApartmentDataService], (service: ApartmentDataService) => {
      let apartment1 = new Apartment({location: 'location 1'});
      let apartment2 = new Apartment({location: 'location 2'});
      service.addApartment(apartment1);
      service.addApartment(apartment2);
      expect(service.getApartmentById(1)).toEqual(apartment1);
      expect(service.getApartmentById(2)).toEqual(apartment2);
    }));

  });

  describe('#deleteApartmentById(id)', () => {

    it('should remove apartment with the corresponding id', inject([ApartmentDataService], (service: ApartmentDataService) => {
      let apartment1 = new Apartment({location: 'location 1'});
      let apartment2 = new Apartment({location: 'location 2'});
      service.addApartment(apartment1);
      service.addApartment(apartment2);
      expect(service.getAllApartments()).toEqual([apartment1, apartment2]);
      service.deleteApartmentById(1);
      expect(service.getAllApartments()).toEqual([apartment2]);
      service.deleteApartmentById(2);
      expect(service.getAllApartments()).toEqual([]);
    }));

    it('should not removing anything if apartment with corresponding id is not found', inject([ApartmentDataService], (service: ApartmentDataService) => {
      let apartment1 = new Apartment({location: 'location 1'});
      let apartment2 = new Apartment({location: 'location 2'});
      service.addApartment(apartment1);
      service.addApartment(apartment2);
      expect(service.getAllApartments()).toEqual([apartment1, apartment2]);
      service.deleteApartmentById(3);
      expect(service.getAllApartments()).toEqual([apartment1, apartment2]);
    }));

  });

  describe('#updateApartmentById(id, values)', () => {

    it('should return apartment with the corresponding id and updated data', inject([ApartmentDataService], (service: ApartmentDataService) => {
      let apartment = new Apartment({location: 'location 1'});
      service.addApartment(apartment);
      let updatedApartment = service.updateApartmentById(1, {
        location: 'new location'
      });
      expect(updatedApartment.location).toEqual('new location');
    }));

    it('should return null if apartment is not found', inject([ApartmentDataService], (service: ApartmentDataService) => {
      let apartment = new Apartment({location: 'location 1'});
      service.addApartment(apartment);
      let updatedApartment = service.updateApartmentById(2, {
        location: 'new location'
      });
      expect(updatedApartment).toEqual(null);
    }));

  });
});
