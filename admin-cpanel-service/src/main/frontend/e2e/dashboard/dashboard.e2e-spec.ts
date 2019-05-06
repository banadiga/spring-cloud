import {DashboardPage} from './dashboard.page';
import {AppPage} from '../app.page';

describe('Dashboard', () => {
  let page: DashboardPage;

  beforeAll(() => {
    page = AppPage.create().clickDashboard();
  });

  it('should display page title', () => {
    expect(page.getParagraphText()).toEqual('Dashboard');
  });

  it('should display Apartment details', () => {
    expect(page.getApartmentDetailsText()).toBeTruthy();
  });

  it('should display Hackster details', () => {
    expect(page.getHacksterDetailsText()).toBeTruthy();
  });

  it('should display Rating details', () => {
    expect(page.getRatingDetailsText()).toBeTruthy();
  });
});
