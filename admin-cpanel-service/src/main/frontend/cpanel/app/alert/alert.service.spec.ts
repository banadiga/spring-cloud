import {async, inject, TestBed} from '@angular/core/testing';
import {AlertService} from './alert.service';
import {RouterTestingModule} from "@angular/router/testing";
import {Alert, AlertType} from "./alert";

describe('AlertService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        AlertService
      ]
    });
  });

  it('should ...', inject([AlertService], (service: AlertService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getAlert()', () => {
    it('should create and return few apartments', async(inject([AlertService], (service: AlertService) => {
      let alerts = [];
      service.getAlert().subscribe((alert: Alert) => alerts.push(alert));

      service.error('The error message');
      service.success('The success message');
      service.info('The info message');
      service.warn('The warn message');

      expect(alerts.length).toEqual(4);
    })));
  });

  describe('#error()', () => {
    it('should create error alert', async(inject([AlertService], (service: AlertService) => {
      let alerts = [];
      service.getAlert().subscribe((alert: Alert) => alerts.push(alert));

      service.error('The message');

      expect(alerts.length).toEqual(1);
      expect(alerts.pop().type).toEqual(AlertType.Error);
    })));
  });

  describe('#success()', () => {
    it('should create success alert', async(inject([AlertService], (service: AlertService) => {
      let alerts = [];
      service.getAlert().subscribe((alert: Alert) => alerts.push(alert));

      service.success('The message');

      expect(alerts.length).toEqual(1);
      expect(alerts.pop().type).toEqual(AlertType.Success);
    })));
  });

  describe('#info()', () => {
    it('should create info alert', async(inject([AlertService], (service: AlertService) => {
      let alerts = [];
      service.getAlert().subscribe((alert: Alert) => alerts.push(alert));

      service.info('The message');

      expect(alerts.length).toEqual(1);
      expect(alerts.pop().type).toEqual(AlertType.Info);
    })));
  });

  describe('#warn()', () => {
    it('should create warn alert', async(inject([AlertService], (service: AlertService) => {
      let alerts = [];
      service.getAlert().subscribe((alert: Alert) => alerts.push(alert));

      service.warn('The message');

      expect(alerts.length).toEqual(1);
      expect(alerts.pop().type).toEqual(AlertType.Warning);
    })));
  });
});
