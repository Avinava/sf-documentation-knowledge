---
title: "Get Report Data"
domain: apex-guide
topic: get-report-data
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:32.224Z
estimatedTokens: 298
keywords: [Report, Data, ReportResults, fact, map, that’s, associated]
---

# Get Report Data

> You can use the ReportResults class to get the fact map, which contains data that’s associated
with a report.

# Get Report Data

You can use the ReportResults class to get the fact map, which contains data that’s associated with a report.

## Example

To access data values of the fact map, you can map grouping value keys to the corresponding fact map keys. In the following example, imagine that you have an opportunity report that’s grouped by close month, and you’ve summarized the amount field. To get the value for the summary amount for the first grouping in the report:

1.  Get the first down-grouping in the report by using the ReportResults.getGroupingsDown method and accessing the first GroupingValue object.
2.  Get the grouping key value from the GroupingValue object by using the getKey method.
3.  Construct a fact map key by appending '!T'to this key value. The resulting fact map key represents the summary value for the first down-grouping.
4.  Get the fact map from the report results by using the fact map key.
5.  Get the first summary amount value by using the ReportFact.getAggregates method and accessing the first SummaryValue object.
6.  Get the field value from the first data cell of the first row of the report by using the ReportFactWithDetails.getRows method.

```

```

## Code Examples

```apex
// Get the report ID
List <Report> reportList = [SELECT Id,DeveloperName FROM Report where 
    DeveloperName = 'Closed_Sales_This_Quarter'];
String reportId = (String)reportList.get(0).get('Id');

// Run a report synchronously
Reports.reportResults results = Reports.ReportManager.runReport(reportId, true);

// Get the first down-grouping in the report
Reports.Dimension dim = results.getGroupingsDown();
Reports.GroupingValue groupingVal = dim.getGroupings()[0];
System.debug('Key: ' + groupingVal.getKey());
System.debug('Label: ' + groupingVal.getLabel());
System.debug('Value: ' + groupingVal.getValue());

// Construct a fact map key, using the grouping key value
String factMapKey = groupingVal.getKey() + '!T';

// Get the fact map from the report results
Reports.ReportFactWithDetails factDetails =
    (Reports.ReportFactWithDetails)results.getFactMap().get(factMapKey);

// Get the first summary amount from the fact map
Reports.SummaryValue sumVal = factDetails.getAggregates()[0];
System.debug('Summary Value: ' + sumVal.getLabel());

// Get the field value from the first data cell of the first row of the report
Reports.ReportDetailRow detailRow = factDetails.getRows()[0];
System.debug(detailRow.getDataCells()[0].getLabel());
```
