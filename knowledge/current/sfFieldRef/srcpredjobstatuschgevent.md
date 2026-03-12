---
title: "SrcPredJobStatusChgEvent"
domain: sfFieldRef
topic: srcpredjobstatuschgevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:14.307Z
estimatedTokens: 369
keywords: [SrcPredJobStatusChgEvent, Notifies, subscribers, Data, Cloud, prediction, job’s, status, changed, API, version, 50.0, later]
---

# SrcPredJobStatusChgEvent

> Notifies subscribers that the Data Cloud prediction job’s status is
			changed. This object is available in API version 50.0 and later.

# SrcPredJobStatusChgEvent

Notifies subscribers that the Data Cloud prediction job’s status is changed. This object is available in API version 50.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see SrcPredJobStatusChgEvent in the Platform Events Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| ErrorCode | Error code for last run | string |  | 4000 |  |  |
| EventCreationDate | Event creation date | datetime |  |  |  |  |
| EventPublishDate | Event publish date | datetime |  |  |  |  |
| EventType | Type of the event | string |  | 4000 |  |  |
| EventUuid | Event Uuid | string |  | 36 |  |  |
| LastRefreshDate | Last Refreshed Date | datetime |  |  |  |  |
| LastRunStatus | Last Run Status | string |  | 4000 |  |  |
| LastRunTime | Last Run Time | datetime |  |  |  |  |
| OutputDloName | API Name of the output DLO | string |  | 4000 |  |  |
| PredictionApiName | Prediction API Name | string |  | 4000 |  |  |
| ReplayId | Replay Id | string |  | 1000 |  |  |
| RowsProcessed | Number of rows last processed | long | 18 |  |  |  |
| RowsUpdated | Number of rows last updated | long | 18 |  |  |  |
| SchemaVersion | Schema version of event | string |  | 4000 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
