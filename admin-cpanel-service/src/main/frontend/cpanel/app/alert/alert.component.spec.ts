import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AlertComponent} from './alert.component';
import {Alert, AlertType} from './alert';
import {AlertService} from './alert.service';
import {AlertServiceStub} from '../../stub/alert-service.stub';

describe('AlertComponent', () => {
  let component: AlertComponent;
  let fixture: ComponentFixture<AlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: AlertService, useClass: AlertServiceStub}
      ],
      declarations: [
        AlertComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#cssClass', () => {

    it(`should return Success`, () => {
      expect(component.cssClass(new Alert({
        type: AlertType.Success,
        message: 'The message'
      }))).toEqual('success')
    });

    it(`should return Error`, () => {
      expect(component.cssClass(new Alert({
        type: AlertType.Error,
        message: 'The message'
      }))).toEqual('danger')
    });

    it(`should return Warning`, () => {
      expect(component.cssClass(new Alert({
        type: AlertType.Warning,
        message: 'The message'
      }))).toEqual('warning')
    });

    it(`should return Info`, () => {
      expect(component.cssClass(new Alert({
        type: AlertType.Info,
        message: 'The message'
      }))).toEqual('info')
    });

    it(`should return test`, () => {
      expect(component.cssClass(new Alert({
        type: 'test',
        message: 'The message'
      }))).toEqual(undefined)
    });
  });
});
