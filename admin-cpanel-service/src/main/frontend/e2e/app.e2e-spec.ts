import {AppPage} from './app.page';

describe('frontend App', () => {
  let page: AppPage;

  beforeAll(() => {
    page = AppPage.create();
  });

  it('should display page title', () => {
    expect(page.getTopText()).toEqual('CPanel');
  });

  it('should display page copyright', () => {
    expect(page.getCopyrightText()).toEqual('Administrator CPanel :)');
  });

  it('should display menu Dashboard', () => {
    expect(page.getNavDashboard()).toEqual('CPanel');
  });

  it('should display menu Apartments', () => {
    expect(page.getNavApartments()).toEqual('Apartments');
  });
});
