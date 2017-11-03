import {ApartmentNewPage} from "./apartment-new.page";
import {browser} from "protractor";

describe('New apartment', () => {
  let page: ApartmentNewPage;

  beforeEach(() => {
    page = new ApartmentNewPage();
    page.navigateTo();
  });

  it('should display apartments message', () => {
    expect(page.getParagraphText()).toEqual('CPanel | New apartment');
  });

  describe('on validation', () => {

    describe('location', () => {

      it('should be required', () => {
        page.location("");

        expect(page.getErrorsText()).toContain('Location is required');
      });

      it('should be long enough', () => {
        page.location("l");

        expect(page.getErrorsText()).toContain('Minimum of 2 characters');
      });
    });

    describe('sqft', () => {

      it('should be required', () => {
        page.sqft("");

        expect(page.getErrorsText()).toContain('Sqft is required');
      });

      it('should be long enough', () => {
        page.sqft("s");

        expect(page.getErrorsText()).toContain('Minimum of 2 characters');
      });
    });

    describe('price', () => {

      it('should be required', () => {
        page.price("");

        expect(page.getErrorsText()).toContain('Price is required');
      });

      it('should be long enough', () => {
        page.price("p");

        expect(page.getErrorsText()).toContain('Minimum of 2 characters');
      });
    });

    describe('realtorName', () => {

      it('should be required', () => {
        page.realtorName("");

        expect(page.getErrorsText()).toContain('Realtor name is required');
      });

      it('should be long enough', () => {
        page.realtorName("r");

        expect(page.getErrorsText()).toContain('Minimum of 2 characters');
      });
    });

    describe('mail', () => {

      it('should be required', () => {
        page.mail("");

        expect(page.getErrorsText()).toContain('Email is required');
      });

      it('should be email', () => {
        page.mail("not-email-at-company.com");

        expect(page.getErrorsText()).toContain('Should be email');
      });

      it('should be long enough', () => {
        page.mail("m");

        expect(page.getErrorsText()).toContain('Minimum of 2 characters');
      });
    });

    describe('phone', () => {

      it('should be required', () => {
        page.phone("");

        expect(page.getErrorsText()).toContain('Phone is required');
      });

      xit('should be phone', () => {
        page.phone("not-phone");

        expect(page.getErrorsText()).toContain('Should be phone');
      });

      it('should be long enough', () => {
        page.phone("p");

        expect(page.getErrorsText()).toContain('Minimum of 2 characters');
      });
    });
  });

  describe('on failure validation', () => {

    it('should not be able to create apartment', () => {
      page.location("");
      page.sqft("");
      page.price("");
      page.realtorName("");
      page.mail("");
      page.phone("");

      expect(page.isEnableSubmit()).toEqual(false);
    });
  });

  describe('creation', () => {

    it('should be able to create apartment', () => {
      page.location("location");
      page.sqft("sqft");
      page.price("price");
      page.realtorName("realtorName");
      page.mail("email@mail.com");
      page.phone("phone");

      expect(page.isEnableSubmit()).toEqual(true);
      expect(page.getErrorsText()).toEqual([]);
    });

    it('should create apartment', () => {
      page.location("location");
      page.sqft("sqft");
      page.price("price");
      page.realtorName("realtorName");
      page.mail("email@mail.com");
      page.phone("phone");

      page.submit();

      expect(browser.getCurrentUrl()).toMatch('/apartments');
    });
  });
});
