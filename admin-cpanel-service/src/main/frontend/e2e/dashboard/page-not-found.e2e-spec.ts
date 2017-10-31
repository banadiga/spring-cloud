import {PageNotFoundPage} from './page-not-found.page';
import {browser} from 'protractor';

describe('PageNotFoundPage', () => {
  let page: PageNotFoundPage;

  beforeEach(() => {
    page = new PageNotFoundPage();
    page.navigateTo();
  });

  it('should display page not found message', () => {
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
