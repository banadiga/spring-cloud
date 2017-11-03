import {browser, by, element} from 'protractor';
import {BasePage} from './base.page';
import {DashboardPage} from './dashboard/dashboard.page';
import {ApartmentListPage} from './apartment/apartment-list.page';

export class AppPage extends BasePage {
  private dashboard = element(by.css('nav a#dashboard'));
  private apartments = element(by.css('nav a#apartments'));

  private constructor() {
    super();
    browser.get('/');
  }

  static create() {
    return new AppPage();
  }

  getParagraphText() {
    return element(by.css('h1')).getText();
  }

  getNavDashboard() {
    return this.dashboard.getText();
  }

  getNavApartments() {
    return this.apartments.getText();
  }

  clickDashboard() {
    this.dashboard.click();
    return new DashboardPage();
  }

  clickApartments() {
    this.apartments.click();
    return new ApartmentListPage();
  }
}
