---
title: "List Asynchronous Runs of a Report"
domain: apex-guide
topic: list-asynchronous-runs-of-a-report
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:32.178Z
estimatedTokens: 123
keywords: [List, Asynchronous, Runs, Report, retrieve, 000, instances, report, ran, asynchronously., Example]
---

# List Asynchronous Runs of a Report

> You can retrieve up to 2,000 instances of a report that
you ran asynchronously.

# List Asynchronous Runs of a Report

You can retrieve up to 2,000 instances of a report that you ran asynchronously.

The instance list is sorted by the date and time when the report was run. Report results are stored for a rolling 24-hour period. During this time, based on your user access level, you can access results for each instance of the report that was run.

## Example

You can get the instance list by calling the ReportManager.getReportInstances method. For example:

```

```

## Code Examples

```apex
// Get the report ID
List <Report> reportList = [SELECT Id,DeveloperName FROM Report where
    DeveloperName = 'Closed_Sales_This_Quarter'];
String reportId = (String)reportList.get(0).get('Id');

// Run a report asynchronously
Reports.ReportInstance instance = Reports.ReportManager.runAsyncReport(reportId, true);
System.debug('List of asynchronous runs: ' + 
    Reports.ReportManager.getReportInstances(reportId));
```
