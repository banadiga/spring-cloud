import {Observable} from 'rxjs';
import {Alert, AlertType} from '../app/alert/alert';


export class AlertServiceStub {
  constructor() {
  }

  getAlert(): Observable<any> {
    return Observable.of(new Alert({
      type: AlertType.Error,
      message: 'The message'
    }))
  }
}
