import {AppPage} from './app.page';

describe('frontend App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('CPanel');
  });

  it('should display menu Dashboard', () => {
    page.navigateTo();
    expect(page.getNavDashboard()).toEqual('Dashboard');
  });

  it('should display menu Apartments', () => {
    page.navigateTo();
    expect(page.getNavApartments()).toEqual('Show apartments');
  });
});
