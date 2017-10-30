import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {PageNotFoundComponent} from './page-not-found.component';
import {RouterTestingModule} from '@angular/router/testing';
import {DashboardComponent} from '../dashboard/dashboard.component';

describe('PageNotFoundComponent', () => {
  let component: PageNotFoundComponent;
  let fixture: ComponentFixture<PageNotFoundComponent>;

  let location: Location;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          {path: 'dashboard', component: DashboardComponent}
        ])
      ],
      declarations: [
        DashboardComponent,
        PageNotFoundComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(PageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Page not found'`, async(() => {
    expect(component.title).toEqual('Page not found');
  }));

  describe('on go back', () => {

    it(`should redirect to `, fakeAsync(() => {
      component.goBack();
      tick(50);
      expect(location.path()).toBe('/dashboard');
    }));

  });
});
