---
title: "ReportEvent"
domain: sfFieldRef
topic: reportevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:12.273Z
estimatedTokens: 678
keywords: [ReportEvent, Tracks, reports, run, org, transaction, security, policy, big, stores, event, data, ReportEventStream, API, version]
---

# ReportEvent

> Tracks when reports are run in your org. You can use ReportEvent
      in a transaction security policy. ReportEvent is a big object that stores the event data of
      ReportEventStream. This object is available in API version 46.0 and later.

# ReportEvent

Tracks when reports are run in your org. You can use ReportEvent in a transaction security policy. ReportEvent is a big object that stores the event data of ReportEventStream. This object is available in API version 46.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see ReportEvent in the Platform Events Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ActionName | Action Name | string |  | 255 |  |  |
| BotSessionIdentifier | Bot Session Identifier | string |  | 255 |  |  |
| ColumnHeaders | Name of Columns | string |  | 10000 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DashboardId | Dashboard ID | reference |  | 18 |  |  |
| DashboardName | Dashboard Name | string |  | 80 |  |  |
| Description | Description | string |  | 255 |  |  |
| DisplayedFieldEntities | Displayed Field Entities | string |  | 10000 |  |  |
| EvaluationTime | Evaluation Time | double |  |  | 18 | 0 |
| EventDate | Event Date | datetime |  |  |  |  |
| EventIdentifier | Event Identifier | string |  | 80 |  |  |
| EventSource | Event Source | picklist |  | 255 |  |  |
| ExecutionIdentifier | Execution Identifier | string |  | 80 |  |  |
| ExportFileFormat | Export File Format | string |  | 80 |  |  |
| Format | Format | picklist |  | 255 |  |  |
| GroupedColumnHeaders | Name of Grouped Columns | string |  | 10000 |  |  |
| Id | Report Event ID | id |  | 18 |  |  |
| IsScheduled | Is Scheduled | boolean |  |  |  |  |
| LoginHistoryId | Login History ID | reference |  | 18 |  |  |
| LoginKey | Login Key | string |  | 24 |  |  |
| Name | Name | string |  | 80 |  |  |
| NumberOfColumns | Number of Columns | int | 9 |  |  |  |
| Operation | Operation | picklist |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PolicyId | Transaction Security Policy ID | reference |  | 18 |  |  |
| PolicyOutcome | Policy Outcome | picklist |  | 255 |  |  |
| QueriedEntities | Queried Entities | string |  | 1000 |  |  |
| Records | Records | json |  | 250000 |  |  |
| RelatedEventIdentifier | Related Event Identifier | string |  | 80 |  |  |
| ReportId | Report ID | reference |  | 18 |  |  |
| RowsProcessed | Rows Processed | double |  |  | 18 | 0 |
| Scope | Scope | string |  | 80 |  |  |
| Sequence | Sequence | int | 9 |  |  |  |
| SessionKey | Session Key | string |  | 24 |  |  |
| SessionLevel | Session Level | picklist |  | 255 |  |  |
| SourceIp | Source IP | string |  | 255 |  |  |
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
