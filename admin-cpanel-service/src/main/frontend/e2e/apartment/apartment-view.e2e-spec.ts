import {ApartmentViewPage} from './apartment-view.page';
import {browser} from 'protractor';
import {Apartment} from '../../cpanel/app/apartment/apartment';
import {AppPage} from '../app.page';

describe('Apartment details', () => {

  describe('for existing apartment', () => {
    let page: ApartmentViewPage;

    beforeAll(() => {
      const apartmentsPage = AppPage.create().clickApartments();
      const apartmentNewPage = apartmentsPage.clickNewApartment();

      const apartment = new Apartment({
        location: 'My location',
        sqft: 'My sqft',
        price: 'My price',
        realtorName: 'My realtor name',
        mail: 'Email@company.com',
        phone: 'My phone ',
      });
      apartmentNewPage.create(apartment);

      page = apartmentsPage.clickOnLocation(apartment.location);
    });

    it('should display page title', () => {
      expect(page.getParagraphText()).toEqual('CPanel | Apartment details');
    });

    it('location', () => {
      expect(page.getLocationText()).toEqual('My location');
    });

    it('sqft', () => {
      expect(page.getSsqftText()).toEqual('My sqft');
    });

    it('price', () => {
      expect(page.getPriceText()).toEqual('My price');
    });

    it('realtorName', () => {
      expect(page.getRealtorNameText()).toEqual('My realtor name');
    });

    it('mail', () => {
      expect(page.getMailText()).toEqual('Email@company.com');
    });

    it('phone', () => {
      expect(page.getPhoneText()).toEqual('My phone');
    });
  });

  describe('for not existing apartment', () => {
    let page: ApartmentViewPage;

    beforeAll(() => {
      page = new ApartmentViewPage();
      page.navigateToNotExistingId();
    });

    it('should redirect to page not found', () => {
      expect(browser.getCurrentUrl()).toMatch('/page-not-found');
    });
  });
});
