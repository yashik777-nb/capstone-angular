import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { Issue } from 'src/app/modal/issue.modal';

import { DoughnutChartComponent } from './doughnut-chart.component';

describe('DoughnutChartComponent', () => {
  let component: DoughnutChartComponent;
  let fixture: ComponentFixture<DoughnutChartComponent>;

  const mockStore = {
    select: (...params) => {
      console.log(params, '[Paramms]');
      if (params.includes('issuesList'))
        return of({
          issues: [
            new Issue(
              'qwqwqw',
              'One',
              'One',
              'Major',
              'Open',
              new Date(),
              new Date(),
              4
            ),
            new Issue(
              'qwqwqw2',
              'Two',
              'Two',
              'Major',
              'Open',
              new Date(),
              new Date(),
              4
            ),
          ],
        });
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoughnutChartComponent],
      providers: [{ provide: Store, useValue: mockStore }],
    }).compileComponents();
    fixture = TestBed.createComponent(DoughnutChartComponent);
    component = fixture.componentInstance;
  });

  it('should create pie chart', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
