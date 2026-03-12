---
title: "Filter Reports"
domain: apex-guide
topic: filter-reports
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:32.168Z
estimatedTokens: 396
keywords: [Filter, Reports, get, specific, results, fly, filter, reports, through, API., Example]
---

# Filter Reports

> To get specific results on the fly, you can filter reports through the
        API.

# Filter Reports

To get specific results on the fly, you can filter reports through the API.

Changes to filters that are made through the API don’t affect the source report definition. Using the API, you can filter with up to 20 custom field filters and add filter logic (such as AND and OR). But standard filters (such as range), filtering by row limit, and cross filters are unavailable.

Before you filter a report, it’s helpful to check the following filter values in the metadata.

-   The ReportTypeColumn.getFilterable method tells you whether a field can be filtered.
-   The ReportTypeColumn.filterValues method returns all filter values for a field.
-   The ReportManager.dataTypeFilterOperatorMap method lists the field data types that you can use to filter the report.
-   The ReportMetadata.getReportFilters method lists all filters that exist in the report.

You can filter reports during synchronous or asynchronous report runs.

## Example

To filter a report, set filter values in the report metadata and then run the report. The following example retrieves the report metadata, overrides the filter value, and runs the report. The example:

1.  Retrieves the report filter object from the metadata by using the ReportMetadata.getReportFilters method.
2.  Sets the value in the filter to a specific date by using the ReportFilter.setValue method and runs the report.
3.  Overrides the filter value to a different date and runs the report again.

The output for the example shows the differing grand total values, based on the date filter that was applied.

```

```

## Code Examples

```apex
// Get the report ID
List <Report> reportList = [SELECT Id,DeveloperName FROM Report where 
    DeveloperName = 'Closed_Sales_This_Quarter'];
String reportId = (String)reportList.get(0).get('Id');

// Get the report metadata
Reports.ReportDescribeResult describe = Reports.ReportManager.describeReport(reportId);
Reports.ReportMetadata reportMd = describe.getReportMetadata();

// Override filter and run report
Reports.ReportFilter filter = reportMd.getReportFilters()[0];
filter.setValue('2013-11-01');
Reports.ReportResults results = Reports.ReportManager.runReport(reportId, reportMd);
Reports.ReportFactWithSummaries factSum = 
    (Reports.ReportFactWithSummaries)results.getFactMap().get('T!T');
System.debug('Value for November: ' + factSum.getAggregates()[0].getLabel());

// Override filter and run report
filter = reportMd.getReportFilters()[0];
filter.setValue('2013-10-01');
results = Reports.ReportManager.runReport(reportId, reportMd);
factSum = (Reports.ReportFactWithSummaries)results.getFactMap().get('T!T');
System.debug('Value for October: ' + factSum.getAggregates()[0].getLabel());
```
