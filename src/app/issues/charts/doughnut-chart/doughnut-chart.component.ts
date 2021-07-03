import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
import { Issue } from 'src/app/modal/issue.modal';

import DatalabelsPlugin from 'chartjs-plugin-datalabels';

import { Store } from '@ngrx/store';
import * as fromApp from '../../../store/app.reducer';
@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css'],
})
export class DoughnutChartComponent implements OnInit {
  doughnutChartLabels: Label[] = [];
  doughnutChartData: MultiDataSet = [new Array(10)];
  doughnutChartType: ChartType = 'doughnut';
  public pieChartPlugins = [DatalabelsPlugin];

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit(): void {
    this.store.select('issuesList').subscribe((storeData) => {
      if (storeData.issues.length > 0) {
        this.doughnutChartLabels = storeData.issues.map(
          (issue: Issue) => issue.issueTitle
        );
        this.doughnutChartData = [
          [...storeData.issues.map((issue: Issue) => issue.views)],
        ];
      }
    });
  }
}
