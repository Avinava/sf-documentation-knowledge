---
title: "HistoryRetentionJob"
domain: tooling-api
topic: historyretentionjob
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:45.836Z
estimatedTokens: 423
keywords: [HistoryRetentionJob, Represents, body, retained, data, archive, status, archived, data., API, version, 29.0, later., Supported, SOAP, Calls, REST, HTTP, Fields]
---

# HistoryRetentionJob

> Represents the body of retained data from the archive,
   and the status of the archived data. Available in API version 29.0 or later.

# HistoryRetentionJob

Represents the body of retained data from the archive, and the status of the archived data. Available in API version 29.0 or later.

## Supported SOAP API Calls

describeSObjects(), query()

## Supported REST API HTTP Methods

GET

## Fields

| Field Name | Details |
| --- | --- |
| DurationSeconds | TypeintPropertiesFilter, Group, Nillable, SortDescriptionHow many seconds the field history retention job took to complete (whether successful or not). |
| HistoryType | TypepicklistPropertiesCreate, Filter, Group, Nillable, Restricted picklist, SortDescriptionThe object type that contains the field history that you retained. Valid values for standard objects are:AccountCaseContactLeadsOpportunityFor custom objects, use the object name. |
| NumberOfRowsRetained | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of field history rows that a field history retention job has retained. |
| RetainOlderThanDate | TypedateTimePropertiesFilter, SortDescriptionThe date and time before which all field history data was retained. |
| StartDate | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe start date of the field history retention job. |
| Status | TypepicklistPropertiesFilter, Group, Nillable, Restricted picklist, SortDescriptionProvides the status of the field history retention job. By default, field history tracking copies data to the archive, leaving a duplicate of the archived data in Salesforce. You can delete data from Salesforce manually after it's archived.Status can include:CopyScheduledCopyRunningCopySucceededCopyFailedCopyKilledNothingToArchiveDeleteScheduledDeleteRunningDeleteSucceededDeleteFailedDeleteKilled |
