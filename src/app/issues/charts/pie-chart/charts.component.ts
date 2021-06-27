import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import {
  SingleDataSet,
  Label,
  monkeyPatchChartJsLegend,
  monkeyPatchChartJsTooltip,
} from 'ng2-charts';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import { Issue } from 'src/app/modal/issue.modal';

import * as fromApp from '../../../store/app.reducer';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css'],
})
export class ChartsComponent implements OnInit {
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [];
  public pieChartData: SingleDataSet = new Array(10);
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [DatalabelsPlugin];

  constructor(private store: Store<fromApp.AppState>) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit(): void {
    this.store.select('issuesList').subscribe((storeData) => {
      if (storeData.issues.length > 0) {
        this.pieChartLabels = storeData.issues.map(
          (issue: Issue) => issue.issueTitle
        );
        this.pieChartData = storeData.issues.map((issue: Issue) => issue.views);
      }
    });
  }
}
