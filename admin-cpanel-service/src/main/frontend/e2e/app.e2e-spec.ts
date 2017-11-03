import {AppPage} from './app.page';

describe('frontend App', () => {
  let page: AppPage;

  beforeAll(() => {
    page = AppPage.create();
  });

  it('should display page title', () => {
    expect(page.getParagraphText()).toEqual('CPanel');
  });

  it('should display menu Dashboard', () => {
    expect(page.getNavDashboard()).toEqual('Dashboard');
  });

  it('should display menu Apartments', () => {
    expect(page.getNavApartments()).toEqual('Show apartments');
  });
});
