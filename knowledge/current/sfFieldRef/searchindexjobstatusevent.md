---
title: "SearchIndexJobStatusEvent"
domain: sfFieldRef
topic: searchindexjobstatusevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:13.162Z
estimatedTokens: 317
keywords: [SearchIndexJobStatusEvent, Notifies, subscribers, changes, status, Data, Cloud, search, index, job, refresh, run-time, API, version, 60.0]
---

# SearchIndexJobStatusEvent

> Notifies subscribers of changes to the status of the Data Cloud search index
         job, such as index refresh status and index run-time status. This object is available
      in API version 60.0 and later.

# SearchIndexJobStatusEvent

Notifies subscribers of changes to the status of the Data Cloud search index job, such as index refresh status and index run-time status. This object is available in API version 60.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see SearchIndexJobStatusEvent in the Platform Events Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ApiName | Search Index API Name | string |  | 4000 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| ErrorCode | Error code for last run | string |  | 4000 |  |  |
| EventCreationDate | Event creation date | datetime |  |  |  |  |
| EventPublishDate | Event publish date | datetime |  |  |  |  |
| EventType | Type of the event | string |  | 4000 |  |  |
| EventUuid | Event UUID | string |  | 36 |  |  |
| IndexRefreshedOn | Last Refreshed Date | datetime |  |  |  |  |
| ReplayId | Replay ID | string |  | 1000 |  |  |
| RuntimeStatus | Last Run Status | string |  | 4000 |  |  |
| SchemaVersion | Schema version of event | string |  | 4000 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
