---
title: "CommerceDiagnosticEvent"
domain: sfFieldRef
topic: commercediagnosticevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:53.619Z
estimatedTokens: 503
keywords: [CommerceDiagnosticEvent, Tracks, checkout, pricing, search, activity, Commerce, implementation, monitor, events, diagnose, issues]
---

# CommerceDiagnosticEvent

> Tracks checkout, pricing, search, and other activity within your
			Commerce implementation to monitor events and diagnose issues.

# CommerceDiagnosticEvent

Tracks checkout, pricing, search, and other activity within your Commerce implementation to monitor events and diagnose issues.

For more information, see CommerceDiagnosticEvent in the Platform Events Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| B2bEdition | B2B Edition | string |  | 50 |  |  |
| B2bVersion | B2B Version | string |  | 50 |  |  |
| BrowserDeviceType | Browser Device Type | int | 9 |  |  |  |
| ContextId | Context ID | string |  | 32 |  |  |
| ContextId2 | Second Context ID | string |  | 32 |  |  |
| ContextMap | Context Map | string |  | 1024 |  |  |
| CorrelationId | Correlation ID | string |  | 32 |  |  |
| Count | Count | int | 9 |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EffectiveAccountId | Effective Account ID | string |  | 32 |  |  |
| ErrorCode | Error Code | string |  | 50 |  |  |
| ErrorMessage | Error Message | string |  | 512 |  |  |
| EventDate | Event Date | datetime |  |  |  |  |
| EventIdentifier | Event Identifier | string |  | 80 |  |  |
| EventUuid | Event UUID | string |  | 36 |  |  |
| IsRetry | Is Retry | boolean |  |  |  |  |
| Operation | Operation | string |  | 50 |  |  |
| OperationStage | Operation Stage | string |  | 50 |  |  |
| OperationState | Operation State | string |  | 50 |  |  |
| OperationStatus | Operation Status | string |  | 50 |  |  |
| OperationTime | Operation Elapsed Time | int | 9 |  |  |  |
| OsVersion | OS Version | int | 9 |  |  |  |
| RelatedEventIdentifier | Related Event Identifier | string |  | 80 |  |  |
| ReplayId | Replay ID | string |  | 1000 |  |  |
| ServiceName | Service Name | string |  | 50 |  |  |
| UserId | User ID | reference |  | 18 |  |  |
| Username | Username | string |  | 80 |  |  |
| WebStoreId | Store ID | string |  | 32 |  |  |
| WebStoreType | Store Type | string |  | 50 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
