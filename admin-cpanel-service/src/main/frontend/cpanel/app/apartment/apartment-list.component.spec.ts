import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ApartmentListComponent} from './apartment-list.component';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule} from '@angular/forms';
import {ApartmentServiceStub} from '../../stub/apartment-service.stub';
import {ApartmentService} from './apartment.service';
import {ConfirmationService} from '../confirmation/confirmation.service';
import {ConfirmationServiceStub} from '../../stub/confirmation-service.stub';

describe('ApartmentListComponent', () => {
  let component: ApartmentListComponent;
  let fixture: ComponentFixture<ApartmentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        RouterTestingModule
      ],
      providers: [
        {provide: ApartmentService, useClass: ApartmentServiceStub},
        {provide: ConfirmationService, useClass: ConfirmationServiceStub}
      ],
      declarations: [
        ApartmentListComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'CPanel | Apartments'`, async(() => {
    expect(component.title).toEqual('CPanel | Apartments');
  }));
});
