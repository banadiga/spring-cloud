import {ApartmentNewPage} from "./apartment-new.page";

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
        page.realtorName("realtorName");

        page.submit();

        expect(page.getErrorsText()).toContain('Location is required');
      });

      it('should be long enough', () => {
        page.location("a");
        page.realtorName("realtorName");

        page.submit();

        expect(page.getErrorsText()).toContain('Minimum of 2 characters');
      });
    });
  });

  describe('on failure validation', () => {

    it('should not be able to create apartment', () => {
      page.location("");
      page.realtorName("");

      page.submit();
    });
  });

  describe('creation', () => {

    it('should create apartment', () => {
      page.location("location");
      page.realtorName("realtorName");

      page.submit();

      expect(page.getErrorsText()).toEqual([]);

    });
  });
});
