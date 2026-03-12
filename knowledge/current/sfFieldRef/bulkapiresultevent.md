---
title: "BulkApiResultEvent"
domain: sfFieldRef
topic: bulkapiresultevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:50.535Z
estimatedTokens: 341
keywords: [BulkApiResultEvent, Tracks, user, downloads, results, Bulk, API, 2.0]
---

# BulkApiResultEvent

> Tracks when a user downloads the results of a Bulk API or Bulk API
         2.0 request.

# BulkApiResultEvent

Tracks when a user downloads the results of a Bulk API or Bulk API 2.0 request.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see BulkApiResultEvent in the Platform Events Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EvaluationTime | Evaluation Time | double |  |  | 18 | 0 |
| EventDate | Event Date | datetime |  |  |  |  |
| EventIdentifier | Event Identifier | string |  | 80 |  |  |
| EventUuid | Event UUID | string |  | 36 |  |  |
| LoginHistoryId | Login History ID | reference |  | 18 |  |  |
| LoginKey | Login Key | string |  | 24 |  |  |
| PolicyId | Transaction Security Policy ID | reference |  | 18 |  |  |
| PolicyOutcome | Policy Outcome | picklist |  | 255 |  |  |
| Query | Query | string |  | 10000 |  |  |
| RelatedEventIdentifier | Related Event Identifier | string |  | 80 |  |  |
| ReplayId | Replay ID | string |  | 1000 |  |  |
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
