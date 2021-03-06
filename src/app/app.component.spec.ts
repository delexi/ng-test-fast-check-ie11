import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import * as fc from 'fast-check';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ng-test-fast-check-ie11'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ng-test-fast-check-ie11');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('ng-test-fast-check-ie11 app is running!');
  });

  
  it('should now, what positive numbers are', () => {
    fc.assert(fc.property(fc.nat(), n => n > 0));
  });
});

