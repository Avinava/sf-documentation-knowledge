---
title: "OrderStatusChangedEvent"
domain: sfFieldRef
topic: orderstatuschangedevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:06.027Z
estimatedTokens: 327
keywords: [OrderStatusChangedEvent, Notifies, subscribers, changes, status, order, record, event, trigger, flows, processes, workflow, API, version, 51.0]
---

# OrderStatusChangedEvent

> Notifies subscribers of changes to the status of an order record. Use
			this event to trigger flows and processes in your order workflow. This object is
		available in API version 51.0 and later.

# OrderStatusChangedEvent

Notifies subscribers of changes to the status of an order record. Use this event to trigger flows and processes in your order workflow. This object is available in API version 51.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see OrderStatusChangedEvent in the Platform Events Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CorrelationIdentifier | Correlation Identifier | string |  | 80 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EventUuid | Event UUID | string |  | 36 |  |  |
| NewStatus | New Status | picklist |  | 40 |  |  |
| NewStatusCode | New Status Category | picklist |  | 255 |  |  |
| OldStatus | Old Status | picklist |  | 40 |  |  |
| OldStatusCode | Old Status Category | picklist |  | 255 |  |  |
| OrderId | Order ID | reference |  | 18 |  |  |
| RelatedOrderId | Related Order ID | reference |  | 18 |  |  |
| RelatedOrderType | Related Order Type | picklist |  | 255 |  |  |
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
