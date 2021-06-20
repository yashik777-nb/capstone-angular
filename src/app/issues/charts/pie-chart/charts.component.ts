import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions, ChartData } from 'chart.js';
import {
  SingleDataSet,
  Label,
  monkeyPatchChartJsLegend,
  monkeyPatchChartJsTooltip,
  Color,
} from 'ng2-charts';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import { Issue } from 'src/app/modal/issue.modal';
import { IssuesService } from 'src/app/services/issues.service';

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

  constructor(private issuesService: IssuesService) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit(): void {
    this.issuesService.getIssues().subscribe(
      (issues: Issue[]) => {
        this.pieChartLabels = issues.map((issue: Issue) => issue.issueTitle);
        this.pieChartData = issues.map((issue: Issue) => issue.views);
      },
      (err) => console.log(err)
    );
  }
}
