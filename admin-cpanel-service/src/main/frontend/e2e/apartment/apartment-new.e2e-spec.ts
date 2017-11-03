import {ApartmentNewPage} from './apartment-new.page';
import {browser} from 'protractor';
import {Apartment} from '../../cpanel/app/apartment/apartment';
import {AppPage} from '../app.page';

describe('New apartment', () => {
  let page: ApartmentNewPage;

  beforeAll(() => {
    const apartmentsPage = AppPage.create().clickApartments();
    page = apartmentsPage.clickNewApartment();
  });

  it('should display page title', () => {
    expect(page.getParagraphText()).toEqual('CPanel | New apartment');
  });

  describe('on validation', () => {

    describe('location', () => {

      it('should be required', () => {
        page.setLocation('');

        expect(page.getErrorsText()).toContain('Location is required');
      });

      it('should be long enough', () => {
        page.setLocation('l');

        expect(page.getErrorsText()).toContain('Minimum of 2 characters');
      });
    });

    describe('sqft', () => {

      it('should be required', () => {
        page.setSqft('');

        expect(page.getErrorsText()).toContain('Sqft is required');
      });

      it('should be long enough', () => {
        page.setSqft('s');

        expect(page.getErrorsText()).toContain('Minimum of 2 characters');
      });
    });

    describe('price', () => {

      it('should be required', () => {
        page.setPrice('');

        expect(page.getErrorsText()).toContain('Price is required');
      });

      it('should be long enough', () => {
        page.setPrice('p');

        expect(page.getErrorsText()).toContain('Minimum of 2 characters');
      });
    });

    describe('realtorName', () => {

      it('should be required', () => {
        page.setRealtorName('');

        expect(page.getErrorsText()).toContain('Realtor name is required');
      });

      it('should be long enough', () => {
        page.setRealtorName('r');

        expect(page.getErrorsText()).toContain('Minimum of 2 characters');
      });
    });

    describe('mail', () => {

      it('should be required', () => {
        page.setMail('');

        expect(page.getErrorsText()).toContain('Email is required');
      });

      it('should be email', () => {
        page.setMail('not-email-at-company.com');

        expect(page.getErrorsText()).toContain('Should be email');
      });

      it('should be long enough', () => {
        page.setMail('m');

        expect(page.getErrorsText()).toContain('Minimum of 2 characters');
      });
    });

    describe('phone', () => {

      it('should be required', () => {
        page.setPhone('');

        expect(page.getErrorsText()).toContain('Phone is required');
      });

      xit('should be phone', () => {
        page.setPhone('not-phone');

        expect(page.getErrorsText()).toContain('Should be phone');
      });

      it('should be long enough', () => {
        page.setPhone('p');

        expect(page.getErrorsText()).toContain('Minimum of 2 characters');
      });
    });
  });

  describe('on failure validation', () => {

    it('should not be able to create apartment', () => {
      page.setLocation('');
      page.setSqft('');
      page.setPrice('');
      page.setRealtorName('');
      page.setMail('');
      page.setPhone('');

      expect(page.isEnableSubmit()).toEqual(false);
    });
  });

  describe('creation', () => {

    it('should be able to create apartment', () => {
      page.setLocation('location');
      page.setSqft('sqft');
      page.setPrice('price');
      page.setRealtorName('realtorName');
      page.setMail('email@mail.com');
      page.setPhone('phone');

      expect(page.isEnableSubmit()).toEqual(true);
      expect(page.getErrorsText()).toEqual([]);
    });

    it('should create apartment', () => {
      page.create(new Apartment({
        location: 'My location',
        sqft: 'My sqft',
        price: 'My price',
        realtorName: 'My realtor name',
        mail: 'Email@company.com',
        phone: 'My phone',
      }));

      expect(browser.getCurrentUrl()).toMatch('/apartments');
    });
  });
});
