import {ConfirmationService} from "../app/confirmation/confirmation.service";
import {Observable} from "rxjs/Observable";
import {Confirmation} from "../app/confirmation/confirmation";

export class ConfirmationServiceStub extends ConfirmationService {

  getConfirmation(): Observable<Confirmation> {
    return Observable.of(new Confirmation({
      id: 'my-id',
      message: 'The message'
    }))
  }
}
