---
title: "QuoteToOrderCompletedEvent"
domain: sfFieldRef
topic: quotetoordercompletedevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:11.294Z
estimatedTokens: 322
keywords: [QuoteToOrderCompletedEvent, Notifies, subscribers, actions, standard, createOrderFromQuote, REST, successful, event, Order, record, isn’t, errors, associated, API]
---

# QuoteToOrderCompletedEvent

> Notifies subscribers when the /actions/standard/createOrderFromQuote REST request is complete. If the
			request is successful, use this event to learn about the Order record. If the request
			isn’t successful, use this event to learn about the errors associated with the
			request. This object is available in API version 56.0 and later.

# QuoteToOrderCompletedEvent

Notifies subscribers when the /actions/standard/createOrderFromQuote REST request is complete. If the request is successful, use this event to learn about the Order record. If the request isn’t successful, use this event to learn about the errors associated with the request. This object is available in API version 56.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see QuoteToOrderCompletedEvent in the Platform Events Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CorrelationIdentifier | Correlation Identifier | string |  | 80 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EventUuid | Event UUID | string |  | 36 |  |  |
| HasErrors | Has Errors | boolean |  |  |  |  |
| OrderId | Order ID | reference |  | 18 |  |  |
| OrderNumber | Order Number | string |  | 255 |  |  |
| QuoteToOrderErrorDetailEvents | Quote To Order Error Detail Event ID | complexvalue |  |  |  |  |
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
