import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
import { Issue } from 'src/app/modal/issue.modal';
import { IssuesService } from 'src/app/services/issues.service';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css'],
})
export class DoughnutChartComponent implements OnInit {
  doughnutChartLabels: Label[] = [];
  doughnutChartData: MultiDataSet = [new Array(10)];
  doughnutChartType: ChartType = 'doughnut';

  constructor(private issuesService: IssuesService) {}

  ngOnInit(): void {
    this.issuesService.getIssues().subscribe(
      (issues: Issue[]) => {
        this.doughnutChartLabels = issues.map(
          (issue: Issue) => issue.issueTitle
        );
        this.doughnutChartData = [
          [...issues.map((issue: Issue) => issue.views)],
        ];
      },
      (err) => console.log(err)
    );
  }
}
