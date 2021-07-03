import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';

import { CustomizeComponent } from './customize.component';

describe('CustomizeComponent', () => {
  let component: CustomizeComponent;
  let fixture: ComponentFixture<CustomizeComponent>;

  const mockStore = {};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomizeComponent],
      providers: [{ provide: Store, useValue: mockStore }],
    }).compileComponents();
    fixture = TestBed.createComponent(CustomizeComponent);
    component = fixture.componentInstance;
  });

  it('should create customize compoenent', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
