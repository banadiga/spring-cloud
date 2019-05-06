import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ConfirmationComponent} from "./confirmation.component";
import {ConfirmationServiceStub} from "../../stub/confirmation-service.stub";
import {ConfirmationService} from "./confirmation.service";
import {RouterTestingModule} from "@angular/router/testing";


describe('ConfirmationComponent', () => {
  let component: ConfirmationComponent;
  let fixture: ComponentFixture<ConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        {provide: ConfirmationService, useClass: ConfirmationServiceStub}
      ],
      declarations: [
        ConfirmationComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xdescribe('#confirm', () => {

    it(`should do resolve`, () => {
    });
  });

  xdescribe('#close', () => {

    it(`should do reject`, () => {
    });
  });
});
