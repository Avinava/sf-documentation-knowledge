---
title: "PlaceOrderCompletedEvent"
domain: sfFieldRef
topic: placeordercompletedevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:08.336Z
estimatedTokens: 270
keywords: [PlaceOrderCompletedEvent, Notifies, subscribers, order, created, updated, invoking, Place, API, Sales, Transaction, version, 63.0, later]
---

# PlaceOrderCompletedEvent

> Notifies subscribers of an order being created or updated by invoking
			the Place Order API or the Place Sales Transaction API. This object is available in
		API version 63.0 and later.

# PlaceOrderCompletedEvent

Notifies subscribers of an order being created or updated by invoking the Place Order API or the Place Sales Transaction API. This object is available in API version 63.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see PlaceOrderCompletedEvent in the Platform Events Developer Guide and Quote and Order Capture Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AppUsageTypes | Application Usage Types | string |  | 100 |  |  |
| CorrelationIdentifier | Correlation Identifier | string |  | 80 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EventUuid | Event UUID | string |  | 36 |  |  |
| HasErrors | Has Errors | boolean |  |  |  |  |
| OrderId | Order ID | reference |  | 18 |  |  |
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
