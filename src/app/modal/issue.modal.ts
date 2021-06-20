export class Issue {
  constructor(
    public id: string,
    public issueDescription: string,
    public issueSeverity: string,
    public issueStatus: string,
    public createdDate: Date,
    public resolvedDate: Date
  ) {}
}
