import {browser, by, element} from 'protractor';
import {BasePage} from './base.page';
import {DashboardPage} from './dashboard/dashboard.page';
import {ApartmentListPage} from './apartment/apartment-list.page';

export class AppPage extends BasePage {
  private topTitle = element(by.css('.navbar-header #dashboard'));
  private dashboard = element(by.css('a#dashboard'));
  private apartments = element(by.css('a#apartments'));
  private copyright = element(by.css('.copyright'));

  private constructor() {
    super();
    browser.get('/');
  }

  static create(): AppPage {
    return new AppPage();
  }

  getTopText() {
    return this.topTitle.getText();
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

  getCopyrightText() {
    return this.copyright.getText();
  }
}
