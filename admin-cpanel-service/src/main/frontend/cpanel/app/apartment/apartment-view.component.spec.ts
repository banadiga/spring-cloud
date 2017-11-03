import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {ApartmentServiceStub} from '../../stub/apartment-service.stub';
import {ApartmentService} from './apartment.service';
import {ApartmentViewComponent} from './apartment-view.component';
import {Apartment} from './apartment';
import {ActivatedRoute} from "@angular/router";
import "rxjs/add/observable/from";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";

describe('ApartmentViewComponent', () => {
  let component: ApartmentViewComponent;
  let fixture: ComponentFixture<ApartmentViewComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        {provide: ApartmentService, useClass: ApartmentServiceStub},
        {provide: ActivatedRoute, useValue: {params: Observable.of({id: 123})}}
      ],
      declarations: [
        ApartmentViewComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartmentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it(`should have as title 'CPanel | Apartment details'`, async(() => {
    expect(component.title).toEqual('CPanel | Apartment details');
  }));

  it(`should have a 'apartment' form`, async(() => {
    expect(component.apartment instanceof Apartment).toBeTruthy()
  }));
});
