export class Apartment {
  id: string;
  location: string;
  price: string;
  sqft: string;
  phone: string;
  realtorName: string;
  mail: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
