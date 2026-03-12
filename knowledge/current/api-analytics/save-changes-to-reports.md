---
title: "Save Changes to Reports"
domain: api-analytics
topic: save-changes-to-reports
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:59.004Z
estimatedTokens: 180
keywords: [Save, Changes, Reports, report, sending, PATCH, resource]
---

# Save Changes to Reports

> Save changes to a report by sending a PATCH request to the Report
        resource.

# Save Changes to Reports

Save changes to a report by sending a PATCH request to the Report resource.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_analytics)

#### Note

Saving a report deletes any running async report jobs because they will be obsolete.

## Example

For report 00OD0000001cxIE, you want to change the report name to “myUpdatedReport” and change the folder that contains the report. You save the changes to the report.

This PATCH request /services/data/v34.0/analytics/reports/00OD0000001cxIE to the Report resource updates and saves the report.

```

```

The response to the PATCH request returns the following details about the updated, saved report.

```

```

## Code Examples

```
{
   "reportMetadata" : {
      "name":"myUpdatedReport",
      "folderId":"00DD00000007enH"}
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
      "developerName" : "myreport", 
      "division" : null,
      "folderId" : "00DD00000007enHMAQ", 
      "groupingsAcross" : [ ], 
      "groupingsDown" : [ ], 
      "hasDetailRows" : true, 
      "hasRecordCount" : true, 
      "historicalSnapshotDates" : [ ],
      "id" : "00OD0000001cxIEMAY", 
      "name" : "myUpdatedReport",
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
