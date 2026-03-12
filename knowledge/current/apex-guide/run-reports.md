---
title: "Run Reports"
domain: apex-guide
topic: run-reports
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:32.189Z
estimatedTokens: 300
keywords: [Run, Reports, run, report, synchronously, asynchronously, through, Salesforce, Dashboards, API, via, Apex., Report, Synchronously, Asynchronously]
---

# Run Reports

> You can run a report synchronously or asynchronously through the Salesforce Reports and Dashboards
        API via Apex.

# Run Reports

You can run a report synchronously or asynchronously through the Salesforce Reports and Dashboards API via Apex.

Reports can be run with or without details and can be filtered by setting report metadata. When you run a report, the API returns data for the same number of records that are available when the report is run in the Salesforce user interface.

Run a report synchronously if you expect it to finish running quickly. Otherwise, we recommend that you run reports through the Salesforce API asynchronously for these reasons:

-   Long-running reports have a lower risk of reaching the timeout limit when they are run asynchronously.

-   The Salesforce Reports and Dashboards API via Apex can handle a higher number of asynchronous run requests at a time.

-   Because the results of an asynchronously run report are stored for a 24-hour rolling period, they’re available for recurring access.


## Run a Report Synchronously

To run a report synchronously, use one of the ReportManager.runReport() methods. For example:

```

```

## Run a Report Asynchronously

To run a report asynchronously, use one of the ReportManager.runAsyncReport() methods. For example:

```

```

## Code Examples

```apex
// Get the report ID
List <Report> reportList = [SELECT Id,DeveloperName FROM Report where 
    DeveloperName = 'Closed_Sales_This_Quarter'];
String reportId = (String)reportList.get(0).get('Id');

// Run the report
Reports.ReportResults results = Reports.ReportManager.runReport(reportId, true);
System.debug('Synchronous results: ' + results);
```

```apex
// Get the report ID
List <Report> reportList = [SELECT Id,DeveloperName FROM Report where 
    DeveloperName = 'Closed_Sales_This_Quarter'];
String reportId = (String)reportList.get(0).get('Id');

// Run the report
Reports.ReportInstance instance = Reports.ReportManager.runAsyncReport(reportId, true);
System.debug('Asynchronous instance: ' + instance);
```
