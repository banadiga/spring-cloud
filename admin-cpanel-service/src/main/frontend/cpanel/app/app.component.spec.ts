import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {RouterTestingModule} from '@angular/router/testing';
import {AlertComponent} from './alert/alert.component';
import {AlertService} from './alert/alert.service';
import {AlertServiceStub} from '../stub/alert-service.stub';
import {ConfirmationService} from './confirmation/confirmation.service';
import {ConfirmationServiceStub} from '../stub/confirmation-service.stub';
import {ConfirmationComponent} from './confirmation/confirmation.component';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        {provide: AlertService, useClass: AlertServiceStub},
        {provide: ConfirmationService, useClass: ConfirmationServiceStub}
      ],
      declarations: [
        AlertComponent,
        ConfirmationComponent,
        AppComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it(`should have as title 'CPanel'`, async(() => {
    expect(component.title).toEqual('CPanel');
  }));

  it(`should have copyright 'Administrator CPanel :)'`, async(() => {
    expect(component.copyright).toEqual('Administrator CPanel :)');
  }));
});
