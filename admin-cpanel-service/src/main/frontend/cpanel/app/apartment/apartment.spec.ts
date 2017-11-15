import {Apartment} from './apartment';

describe('Apartment', () => {

  it('should create an instance', () => {
    expect(new Apartment()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let apartment = new Apartment({
      location: 'location',
      price: '123.456',
      sqft: '234.567',
      phone: 'phone',
      realtorName: 'realtorName',
      mail: 'mail'
    });
    expect(apartment.location).toEqual('location');
    expect(apartment.price).toEqual('123.456');
    expect(apartment.sqft).toEqual('234.567');
    expect(apartment.phone).toEqual('phone');
    expect(apartment.realtorName).toEqual('realtorName');
    expect(apartment.mail).toEqual('mail');
  });
});
