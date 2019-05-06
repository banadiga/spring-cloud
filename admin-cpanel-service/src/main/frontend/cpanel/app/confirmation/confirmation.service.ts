import {Injectable} from '@angular/core';
import {Confirmation} from './confirmation';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ConfirmationService {
  private subject = new Subject<Confirmation>();

  constructor() {
  }

  getConfirmation(): Observable<Confirmation> {
    return this.subject.asObservable();
  }

  confirm(id: string, message: string): Promise<string> {
    return new Promise<void | string>((resolve, reject) => {
      this.subject.next(new Confirmation({
        id: id,
        message: message,
        resolve: resolve,
        reject: reject,
      }));
    });
  }
}
