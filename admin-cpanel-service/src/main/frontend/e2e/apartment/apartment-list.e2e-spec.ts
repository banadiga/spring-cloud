import {ApartmentListPage} from './apartment-list.page';
import {browser} from 'protractor';
import {Apartment} from '../../cpanel/app/apartment/apartment';
import {AppPage} from '../app.page';

describe('Apartment list', () => {
  let page: ApartmentListPage;

  beforeAll(() => {
    page = AppPage.create().clickApartments();
  });

  it('should display page title', () => {
    expect(page.getParagraphText()).toEqual('CPanel | Apartments');
  });

  it('should display link to `new apartment`', () => {
    expect(page.getNewApartmentText()).toEqual('New apartment');
  });

  describe('collection of apartment', () => {

    beforeEach(() => {
      page = AppPage.create().clickApartments();
    });

    it('should display apartment after create', () => {
      const apartment = new Apartment({
        location: 'My location',
        sqft: 'My sqft',
        price: 'My price',
        realtorName: 'My realtor name',
        mail: 'Email@company.com',
        phone: 'My phone',
      });

      const apartmentNewPage = page.clickNewApartment();
      apartmentNewPage.create(apartment);

      expect(page.countApartments()).toEqual(1);
      expect(page.getApartmentsLocation()).toContain(apartment.location);
    });

    it('should display few apartment after create', () => {
      const apartmentNewPage1 = page.clickNewApartment();
      apartmentNewPage1.create(new Apartment({
        location: 'My location 1',
        sqft: 'My sqft 1',
        price: 'My price 1',
        realtorName: 'My realtor name 1',
        mail: 'Email1@company.com',
        phone: 'My phone  1',
      }));

      const apartmentNewPage2 = page.clickNewApartment();
      apartmentNewPage2.create(new Apartment({
        location: 'My location 2',
        sqft: 'My sqft 2',
        price: 'My price 2',
        realtorName: 'My realtor name 2',
        mail: 'Email2@company.com',
        phone: 'My phone 2',
      }));

      expect(page.countApartments()).toEqual(2);
    });
  });

  describe('on `new apartment`', () => {

    beforeEach(() => {
      page = AppPage.create().clickApartments();
    });

    it('should go to `new apartment` page', () => {
      page.clickNewApartment();
      expect(browser.getCurrentUrl()).toMatch('/apartments/new');
    });
  });
});
