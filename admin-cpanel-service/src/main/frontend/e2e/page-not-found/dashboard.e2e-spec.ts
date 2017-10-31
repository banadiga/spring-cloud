import {DashboardPage} from "./dashboard.page";

describe('Dashboard', () => {
  let page: DashboardPage;

  beforeEach(() => {
    page = new DashboardPage();
  });

  it('should display dashboard message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('CPanel | Dashboard');
  });
});
