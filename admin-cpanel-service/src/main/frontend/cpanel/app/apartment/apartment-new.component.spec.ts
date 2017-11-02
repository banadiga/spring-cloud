import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ApartmentServiceStub} from '../../stub/apartment-service.stub';
import {ApartmentService} from './apartment.service';
import {ApartmentNewComponent} from "./apartment-new.component";

describe('ApartmentNewComponent', () => {
  let component: ApartmentNewComponent;
  let fixture: ComponentFixture<ApartmentNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
      providers: [
        {provide: ApartmentService, useClass: ApartmentServiceStub}
      ],
      declarations: [
        ApartmentNewComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartmentNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it(`should have as title 'CPanel | New apartment'`, async(() => {
    expect(component.title).toEqual('CPanel | New apartment');
  }));

  it(`should have a 'apartment' form`, async(() => {
    expect(component.apartment instanceof FormGroup).toBeTruthy()
  }));
});
