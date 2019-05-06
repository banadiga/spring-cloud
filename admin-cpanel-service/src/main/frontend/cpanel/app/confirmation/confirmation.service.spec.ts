import {async, inject, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from "@angular/router/testing";
import {ConfirmationService} from "./confirmation.service";
import {Confirmation} from "./confirmation";

describe('ConfirmationService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        ConfirmationService
      ]
    });
  });

  it('should ...', inject([ConfirmationService], (service: ConfirmationService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getConfirmation()', () => {

    it('should create and return confirmation', async(inject([ConfirmationService], (service: ConfirmationService) => {
      let confirmations = [];
      service.getConfirmation().subscribe((confirmation: Confirmation) => confirmations.push(confirmation));

      service.confirm('my-id', 'The error message');

      expect(confirmations.length).toEqual(1);
    })));
  });

  describe('#confirm()', () => {

    it('should create confirmation', async(inject([ConfirmationService], (service: ConfirmationService) => {
      let confirmations = [];
      service.getConfirmation().subscribe((confirmation: Confirmation) => confirmations.push(confirmation));

      service.confirm('my-id', 'The error message');

      expect(confirmations.length).toEqual(1);

      let confirmation = confirmations.pop();
      expect(confirmation.id).toEqual('my-id');
      expect(confirmation.message).toEqual('The error message');
    })));
  });
});
