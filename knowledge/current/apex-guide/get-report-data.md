---
title: "Get Report Data"
domain: apex-guide
topic: get-report-data
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:46.251Z
keywords: [Get, Report, Data, Example]
---

# Get Report Data

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