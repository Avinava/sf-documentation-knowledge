---
title: "QuoteSaveEvent"
domain: sfFieldRef
topic: quotesaveevent
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:11.285Z
estimatedTokens: 290
keywords: [QuoteSaveEvent, Notifies, subscribers, process, started, actions, standard, successful, event, updated, quote, isn't, errors, how, fix]
---

# QuoteSaveEvent

> Notifies subscribers that the process started by the /actions/standard/quotesaveevent request is complete.
			If the process is successful, use this event to learn about the updated quote. If the
			request isn't successful, use this event to learn about the errors and how to fix
			them. This object is available in API version 58.0 and later.

# QuoteSaveEvent

Notifies subscribers that the process started by the /actions/standard/quotesaveevent request is complete. If the process is successful, use this event to learn about the updated quote. If the request isn't successful, use this event to learn about the errors and how to fix them. This object is available in API version 58.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see QuoteSaveEvent in the Platform Events Developer Guide and Quote and Order Capture Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CorrelationIdentifier | Correlation Identifier | string |  | 80 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EventUuid | Event UUID | string |  | 36 |  |  |
| HasErrors | Has Errors | boolean |  |  |  |  |
| QuoteId | Reference Entity ID | reference |  | 18 |  |  |
| ReplayId | Replay ID | string |  | 1000 |  |  |
| RequestIdentifier | Request Identifier | string |  | 80 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
