---
title: "Get Report Metadata"
domain: apex-guide
topic: get-report-metadata
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:32.230Z
estimatedTokens: 198
keywords: [Report, Metadata, retrieve]
---

# Get Report Metadata

> You can retrieve report metadata to get information about
a report and its report type.

# Get Report Metadata

You can retrieve report metadata to get information about a report and its report type.

Metadata includes information about fields that are used in the report for filters, groupings, detailed data, and summaries. You can use the metadata to do several things:

-   Find out what fields and values you can filter on in the report type.
-   Build custom chart visualizations by using the metadata information on fields, groupings, detailed data, and summaries.
-   Change filters in the report metadata when you run a report.

Use the ReportResults.getReportMetadata method to retrieve report metadata. You can then use the “get” methods on the ReportMetadata class to access metadata values.

## Example

The following example retrieves metadata for a report.

```

```

## Code Examples

```apex
// Get the report ID
List <Report> reportList = [SELECT Id,DeveloperName FROM Report where 
    DeveloperName = 'Closed_Sales_This_Quarter'];
String reportId = (String)reportList.get(0).get('Id');

// Run a report
Reports.ReportResults results = Reports.ReportManager.runReport(reportId);

// Get the report metadata
Reports.ReportMetadata rm = results.getReportMetadata();
System.debug('Name: ' + rm.getName());
System.debug('ID: ' + rm.getId());
System.debug('Currency code: ' + rm.getCurrencyCode());
System.debug('Developer name: ' + rm.getDeveloperName());

// Get grouping info for first grouping
Reports.GroupingInfo gInfo = rm.getGroupingsDown()[0];
System.debug('Grouping name: ' + gInfo.getName());
System.debug('Grouping sort order: ' + gInfo.getSortOrder());
System.debug('Grouping date granularity: ' + gInfo.getDateGranularity());

// Get aggregates
System.debug('First aggregate: ' + rm.getAggregates()[0]);
System.debug('Second aggregate: ' + rm.getAggregates()[1]);

// Get detail columns
System.debug('Detail columns: ' + rm.getDetailColumns());

// Get report format
System.debug('Report format: ' + rm.getReportFormat());
```
