---
title: "ApiAnomalyEventStore"
domain: sfFieldRef
topic: apianomalyeventstore
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:47.290Z
estimatedTokens: 497
keywords: [ApiAnomalyEventStore, Tracks, anomalies, how, users, API, calls, stores, event, data, ApiAnomalyEvent, version, 50.0, later]
---

# ApiAnomalyEventStore

> Tracks anomalies in how users make API calls. ApiAnomalyEventStore is
         an object that stores the event data of ApiAnomalyEvent. This object is available in API
         version 50.0 and later.

# ApiAnomalyEventStore

Tracks anomalies in how users make API calls. ApiAnomalyEventStore is an object that stores the event data of ApiAnomalyEvent. This object is available in API version 50.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see ApiAnomalyEventStore in the Platform Events Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ApiAnomalyEventNumber | Event Name | string |  | 255 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EvaluationTime | Evaluation Time | double |  |  | 18 | 0 |
| EventDate | Event Date | datetime |  |  |  |  |
| EventIdentifier | Event ID | string |  | 80 |  |  |
| Id | API Anomaly Event Store ID | id |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LoginKey | Login Key | string |  | 24 |  |  |
| Operation | Operation | string |  | 255 |  |  |
| PolicyId | Transaction Security Policy ID | reference |  | 18 |  |  |
| PolicyOutcome | Policy Outcome | picklist |  | 255 |  |  |
| QueriedEntities | Queried Entities | textarea |  | 1000 |  |  |
| RequestIdentifier | Request Identifier | string |  | 255 |  |  |
| RowsProcessed | Rows Processed | double |  |  | 18 | 0 |
| Score | Score | double |  |  | 12 | 6 |
| SecurityEventData | Event Data | textarea |  | 10000 |  |  |
| SessionKey | Session Key | string |  | 24 |  |  |
| SourceIp | Source IP Address | string |  | 255 |  |  |
| Summary | Summary | textarea |  | 1000 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Uri | Uri | string |  | 255 |  |  |
| UserAgent | User Agent | textarea |  | 1000 |  |  |
| UserId | User ID | reference |  | 18 |  |  |
| Username | Username | string |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
