---
title: "ApiEvent"
domain: sfFieldRef
topic: apievent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:47.308Z
estimatedTokens: 667
keywords: [ApiEvent, Tracks, user-initiated, read-only, API, calls, query, queryMore, count, Captures, requests, SOAP, Bulk, Enterprise, Partner]
---

# ApiEvent

> Tracks these user-initiated read-only API calls: query(), queryMore(),
         and count(). Captures API requests through SOAP API
         and Bulk API for the Enterprise and Partner WSDLs. Tooling API calls and API calls
         originating from a Salesforce mobile app aren’t captured. You can use ApiEvent in a
      transaction security policy. ApiEvent is a big object that stores the event data of
      ApiEventStream. This object is available in API version 46.0 and later.

# ApiEvent

Tracks these user-initiated read-only API calls: query(), queryMore(), and count(). Captures API requests through SOAP API and Bulk API for the Enterprise and Partner WSDLs. Tooling API calls and API calls originating from a Salesforce mobile app aren’t captured. You can use ApiEvent in a transaction security policy. ApiEvent is a big object that stores the event data of ApiEventStream. This object is available in API version 46.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see ApiEvent in the Platform Events Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| ActionName | Action Name | string |  | 255 |  |  |
| AdditionalInfo | Additional Information | string |  | 10000 |  |  |
| ApiType | API Type | string |  | 80 |  |  |
| ApiVersion | API Version | double |  |  | 18 | 0 |
| Application | Application | string |  | 255 |  |  |
| BotSessionIdentifier | Bot Session Identifier | string |  | 255 |  |  |
| Client | Client | string |  | 512 |  |  |
| ConnectedAppId | Connected App ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| ElapsedTime | Elapsed Time | int | 9 |  |  |  |
| EvaluationTime | Evaluation Time | double |  |  | 18 | 0 |
| EventDate | Event Date | datetime |  |  |  |  |
| EventIdentifier | Event Identifier | string |  | 80 |  |  |
| Id | API Event ID | id |  | 18 |  |  |
| LoginHistoryId | Login History ID | reference |  | 18 |  |  |
| LoginKey | Login Key | string |  | 24 |  |  |
| Operation | Operation | picklist |  | 255 |  |  |
| OperationStatus | Operation Status | string |  | 255 |  |  |
| Platform | Platform | string |  | 255 |  |  |
| PolicyId | Transaction Security Policy ID | reference |  | 18 |  |  |
| PolicyOutcome | Policy Outcome | picklist |  | 255 |  |  |
| QueriedEntities | Queried Entities | string |  | 1000 |  |  |
| Query | Query | string |  | 10000 |  |  |
| Records | Records | json |  | 250000 |  |  |
| RelatedEventIdentifier | Related Event Identifier | string |  | 80 |  |  |
| RequestIdentifier | Request Identifier | string |  | 80 |  |  |
| RowsProcessed | Rows Processed | double |  |  | 18 | 0 |
| RowsReturned | Rows Returned | double |  |  | 18 | 0 |
| SessionKey | Session Key | string |  | 24 |  |  |
| SessionLevel | Session Level | picklist |  | 255 |  |  |
| SourceIp | Source IP | string |  | 255 |  |  |
| UserAgent | User Agent | string |  | 1000 |  |  |
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
