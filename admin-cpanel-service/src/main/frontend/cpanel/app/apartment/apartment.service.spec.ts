import {inject, TestBed} from '@angular/core/testing';

import {ApartmentService} from './apartment.service';
import {Apartment} from './apartment';

describe('ApartmentService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApartmentService]
    });
  });

  it('should ...', inject([ApartmentService], (service: ApartmentService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getAllApartments()', () => {

    it('should return an empty array by default', inject([ApartmentService], (service: ApartmentService) => {
      expect(service.getAllApartments()).toEqual([]);
    }));

    it('should return all apartments', inject([ApartmentService], (service: ApartmentService) => {
      let apartment1 = new Apartment({location: 'location 1'});
      let apartment2 = new Apartment({location: 'location 2'});
      service.addApartment(apartment1);
      service.addApartment(apartment2);
      expect(service.getAllApartments()).toEqual([apartment1, apartment2]);
    }));

  });

  describe('#getApartment()', () => {

    it('should return an null by default', inject([ApartmentService], (service: ApartmentService) => {
      expect(service.getApartmentById(1)).toEqual(null);
    }));

  });


  describe('#save(apartment)', () => {

    it('should automatically assign an incrementing id', inject([ApartmentService], (service: ApartmentService) => {
      let apartment1 = new Apartment({location: 'location 1'});
      let apartment2 = new Apartment({location: 'location 2'});
      service.addApartment(apartment1);
      service.addApartment(apartment2);
      expect(service.getApartmentById(1)).toEqual(apartment1);
      expect(service.getApartmentById(2)).toEqual(apartment2);
    }));

  });

  describe('#deleteApartmentById(id)', () => {

    it('should remove apartment with the corresponding id', inject([ApartmentService], (service: ApartmentService) => {
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

    it('should not removing anything if apartment with corresponding id is not found', inject([ApartmentService], (service: ApartmentService) => {
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

    it('should return apartment with the corresponding id and updated data', inject([ApartmentService], (service: ApartmentService) => {
      let apartment = new Apartment({location: 'location 1'});
      service.addApartment(apartment);
      service.updateApartmentById(1, {
        location: 'new location'
      });
      let updatedApartment = service.getApartmentById(1);
      expect(updatedApartment.location).toEqual('new location');
    }));

    it('should not create if apartment is not found', inject([ApartmentService], (service: ApartmentService) => {
      let apartment = new Apartment({location: 'location 1'});
      service.addApartment(apartment);
      service.updateApartmentById(2, {
        location: 'new location'
      });
      let updatedApartment = service.getApartmentById(2);
      expect(updatedApartment).toEqual(null);
    }));

  });
});
