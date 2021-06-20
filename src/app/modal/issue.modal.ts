export class Issue {
  constructor(
    public id: string,
    public issueTitle: string,
    public issueDescription: string,
    public issueSeverity: string,
    public issueStatus: string,
    public createdDate: Date,
    public resolvedDate: Date,
    public views: number,
    public backGroundColor: string,
    public hoverBackGroundColor: string
  ) {}
}
