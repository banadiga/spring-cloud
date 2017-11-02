import {AppPage} from './app.page';

describe('frontend App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display welcome message', () => {
    expect(page.getParagraphText()).toEqual('CPanel');
  });

  it('should display menu Dashboard', () => {
    expect(page.getNavDashboard()).toEqual('Dashboard');
  });

  it('should display menu Apartments', () => {
    expect(page.getNavApartments()).toEqual('Show apartments');
  });
});
