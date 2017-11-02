import {ApartmentListPage} from './apartment-list.page';
import {browser} from "protractor";

describe('Apartment list', () => {
  let page: ApartmentListPage;

  beforeEach(() => {
    page = new ApartmentListPage();
    page.navigateTo();
  });

  it('should display apartments message', () => {
    expect(page.getParagraphText()).toEqual('CPanel | Apartments');
  });

  it('should display link to `new apartment`', () => {
    expect(page.getNewApartment()).toEqual('New apartment');
  });

  it('should go to `new apartment` page', () => {
    page.gotoNewApartment();
    expect(browser.getCurrentUrl()).toMatch('/new-apartment');
  });
});
