import {ApartmentListPage} from './apartment-list-page';

describe('Apartment list', () => {
  let page: ApartmentListPage;

  beforeEach(() => {
    page = new ApartmentListPage();
  });

  xit('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('CPanel | Apartment');
  });
});
