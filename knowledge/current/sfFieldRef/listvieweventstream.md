---
title: "ListViewEventStream"
domain: sfFieldRef
topic: listvieweventstream
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:02.442Z
estimatedTokens: 595
keywords: [ListViewEventStream, Tracks, actions, views, Lightning, Experience, Salesforce, Classic, API, event, captures, user, runs, exports, view]
---

# ListViewEventStream

> Tracks actions related to list views in Lightning Experience,
         Salesforce Classic, or the API. For example, the event captures when a user runs or exports
         a list view. It doesn’t capture list view events of Setup entities. This object is
      available in API version 46.0 and later.

# ListViewEventStream

Tracks actions related to list views in Lightning Experience, Salesforce Classic, or the API. For example, the event captures when a user runs or exports a list view. It doesn’t capture list view events of Setup entities. This object is available in API version 46.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see ListViewEventStream in the Platform Events Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AppName | Application Name | string |  | 255 |  |  |
| ColumnHeaders | Name of Columns | string |  | 10000 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DeveloperName | Developer Name | string |  | 80 |  |  |
| EvaluationTime | Evaluation Time | double |  |  | 18 | 0 |
| EventDate | Event Date | datetime |  |  |  |  |
| EventIdentifier | Event Identifier | string |  | 80 |  |  |
| EventSource | Event Source | picklist |  | 255 |  |  |
| EventUuid | Event UUID | string |  | 36 |  |  |
| ExecutionIdentifier | Execution Identifier | string |  | 80 |  |  |
| FilterCriteria | Filter Criteria | json |  | 250000 |  |  |
| ListViewId | List View ID | string |  | 18 |  |  |
| LoginHistoryId | Login History ID | reference |  | 18 |  |  |
| LoginKey | Login Key | string |  | 24 |  |  |
| Name | Name | string |  | 40 |  |  |
| NumberOfColumns | Number of Columns | int | 9 |  |  |  |
| OrderBy | Order By | string |  | 255 |  |  |
| OwnerId | Owner | string |  | 18 |  |  |
| PolicyId | Transaction Security Policy ID | reference |  | 18 |  |  |
| PolicyOutcome | Policy Outcome | picklist |  | 255 |  |  |
| QueriedEntities | Queried Entities | string |  | 1000 |  |  |
| Records | Records | json |  | 250000 |  |  |
| RelatedEventIdentifier | Related Event Identifier | string |  | 80 |  |  |
| ReplayId | Replay ID | string |  | 1000 |  |  |
| RowsProcessed | Rows Processed | double |  |  | 18 | 0 |
| Scope | Scope | string |  | 255 |  |  |
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
