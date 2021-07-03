import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Store } from '@ngrx/store';
import { of } from 'rxjs';

import { NavigationBarComponent } from './navigation-bar.component';
import { RouterTestingModule } from '@angular/router/testing';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('NavigationBarComponent', () => {
  let component: NavigationBarComponent;
  let fixture: ComponentFixture<NavigationBarComponent>;

  const mockStore = {
    select: (...params) => {
      console.log(params, '[Paramms]');
      if (params.includes('userData') && params.includes('authenticated'))
        return of(false);
    },
  };

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule],
        declarations: [NavigationBarComponent],
        providers: [{ provide: Store, useValue: mockStore }],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
      }).compileComponents();
      fixture = TestBed.createComponent(NavigationBarComponent);
      component = fixture.componentInstance;
    })
  );

  it(
    'should create',
    waitForAsync(() => {
      fixture.detectChanges();
      expect(component).toBeTruthy();
    })
  );

  it(
    "should load four li's if authenticated",
    waitForAsync(() => {
      fixture.detectChanges();
      let compiled = fixture.debugElement.nativeElement;
      fixture
        .whenStable()
        .then(() =>
          expect(compiled.querySelectorAll('.dropdown-menu li').length).toEqual(
            2
          )
        );
    })
  );
});
