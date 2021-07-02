import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display h4 tag', () => {
    let compiled = fixture.nativeElement;
    expect(compiled.querySelector('h4').textContent).toEqual(
      'This Applciation shows the list of issues.'
    );
  });

  it('should display h6 tag', () => {
    let compiled = fixture.nativeElement;
    expect(compiled.querySelector('h6').textContent).toEqual(
      'This logged in user can view/edit/delete issues'
    );
  });
});
