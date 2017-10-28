import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ApartmentListComponent} from './apartment-list.component';
import {FormsModule} from "@angular/forms";
import {Apartment} from "./apartment";

describe('ApartmentListComponent', () => {
  let component: ApartmentListComponent;
  let fixture: ComponentFixture<ApartmentListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ApartmentListComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ApartmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(ApartmentListComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Administrator CPanel | Apartment'`, async(() => {
    let fixture = TestBed.createComponent(ApartmentListComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Administrator CPanel | Apartment');
  }));

  it(`should have a newApartment`, async(() => {
    let fixture = TestBed.createComponent(ApartmentListComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.newApartment instanceof Apartment).toBeTruthy()
  }));
});
