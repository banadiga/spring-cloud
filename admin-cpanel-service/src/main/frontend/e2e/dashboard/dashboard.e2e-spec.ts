import {DashboardPage} from './dashboard.page';
import {AppPage} from '../app.page';

describe('Dashboard', () => {
  let page: DashboardPage;

  beforeAll(() => {
    page = AppPage.create().clickDashboard();
  });

  it('should display page title', () => {
    expect(page.getParagraphText()).toEqual('CPanel | Dashboard');
  });
});
