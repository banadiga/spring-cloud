import {PageNotFoundPage} from './page-not-found.page';
import {browser} from 'protractor';

describe('PageNotFoundPage', () => {
  let page: PageNotFoundPage;

  beforeAll(() => {
    page = new PageNotFoundPage();
  });

  beforeEach(() => {
    page.navigateToNotExistingPage();
  });

  it('should display page title', () => {
    expect(page.getParagraphText()).toEqual('Page not found');
  });

  describe('back link', () => {

    it('should display', () => {
      expect(page.getBackLink()).toEqual('Back to dashboard');
    });

    it('should go back', () => {
      page.goBack();
      expect(browser.getCurrentUrl()).toMatch('/dashboard');
    });
  });
});