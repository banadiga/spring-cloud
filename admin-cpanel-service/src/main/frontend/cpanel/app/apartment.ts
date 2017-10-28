export class Apartment {
  id: number;
  location: string;
  price: number;
  sqft: number;
  phone: string;
  realtorName: string;
  mail: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
