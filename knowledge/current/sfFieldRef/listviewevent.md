---
title: "ListViewEvent"
domain: sfFieldRef
topic: listviewevent
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:02.431Z
estimatedTokens: 599
keywords: [ListViewEvent, Tracks, users, access, data, views, Lightning, Experience, Salesforce, Classic, API, doesn’t, track, Setup, entities]
---

# ListViewEvent

> Tracks when users access data with list views using Lightning
         Experience, Salesforce Classic, or the API. It doesn’t track list views of Setup
         entities. You can use ListViewEvent in a transaction security policy. ListViewEvent is
      a big object that stores the event data of ListViewEventStream. This object is available in
      API version 46.0 and later.

# ListViewEvent

Tracks when users access data with list views using Lightning Experience, Salesforce Classic, or the API. It doesn’t track list views of Setup entities. You can use ListViewEvent in a transaction security policy. ListViewEvent is a big object that stores the event data of ListViewEventStream. This object is available in API version 46.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see ListViewEvent in the Platform Events Developer Guide.

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
| ExecutionIdentifier | Execution Identifier | string |  | 80 |  |  |
| FilterCriteria | Filter Criteria | json |  | 250000 |  |  |
| Id | List View Event ID | id |  | 18 |  |  |
| ListViewId | List View ID | reference |  | 18 |  |  |
| LoginHistoryId | Login History ID | reference |  | 18 |  |  |
| LoginKey | Login Key | string |  | 24 |  |  |
| Name | Name | string |  | 40 |  |  |
| NumberOfColumns | Number of Columns | int | 9 |  |  |  |
| OrderBy | Order By | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PolicyId | Transaction Security Policy ID | reference |  | 18 |  |  |
| PolicyOutcome | Policy Outcome | picklist |  | 255 |  |  |
| QueriedEntities | Queried Entities | string |  | 1000 |  |  |
| Records | Records | json |  | 250000 |  |  |
| RelatedEventIdentifier | Related Event Identifier | string |  | 80 |  |  |
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
