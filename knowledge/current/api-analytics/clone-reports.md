---
title: "Clone Reports"
domain: api-analytics
topic: clone-reports
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:58.756Z
estimatedTokens: 116
keywords: [Clone, Reports, Creates, copy, custom, standard, report, sending, POST, resource]
---

# Clone Reports

> Creates a copy of a custom, standard, or public report by sending a POST request to
      the Report List resource.

# Clone Reports

Creates a copy of a custom, standard, or public report by sending a POST request to the Report List resource.

## Example

You want to clone report 00OD0000001cxIE and name the cloned report as "myNewReport."

This POST request /services/data/v34.0/analytics/reports?cloneId=00OD0000001cxIE to the Report List resource clones the report.

```

```

The response to the POST request returns the following details about the cloned report.

```

```

## Code Examples

```
{ "reportMetadata" :
   {"name":"myNewReport"}
}
```

```
{ 
   "reportExtendedMetadata" : { 
      ... 
   },
   "reportMetadata" : { 
      "aggregates" : [ "RowCount" ], 
      "chart" : null,
      "currency" : null,
      "description" : null,
      "detailColumns" : [ 
         "USERS.NAME", 
         "ACCOUNT.NAME", 
         "TYPE", 
         "DUE_DATE",
         "LAST_UPDATE", 
         "ADDRESS1_STATE" ], 
      "developerName" : "myreport2", 
      "division" : null,
      "folderId" : "005D0000001UlszIAC", 
      "groupingsAcross" : [ ], 
      "groupingsDown" : [ ],
      "hasDetailRows" : true, 
      "hasRecordCount" : true, 
      "historicalSnapshotDates" : [ ], 
      "id" : "00OD0000001jabSMAQ", 
      "name" : "myNewReport", 
      "reportBooleanFilter" : null, 
      "reportFilters" : [ ], 
      "reportFormat" : "TABULAR", 
      "reportType" : { 
         "label" : "Accounts", 
         "type" : "AccountList" }, 
      "scope" : "user", 
      "showGrandTotal" : true,     
      "showSubtotals" : true,
      "sortBy" : [ ],
      "standardDateFilter" : { 
         "column" : "CREATED_DATE", 
         "durationValue" : "CUSTOM",
         "endDate" : null, 
         "startDate" : null }, 
      "standardFilters" : null }, 
   "reportTypeMetadata" : {
      ... 
   }
}
```
