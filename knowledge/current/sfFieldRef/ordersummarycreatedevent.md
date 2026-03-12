---
title: "OrderSummaryCreatedEvent"
domain: sfFieldRef
topic: ordersummarycreatedevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:06.075Z
estimatedTokens: 216
keywords: [OrderSummaryCreatedEvent, Notifies, subscribers, creation, order, summary, record, event, trigger, flows, processes, workflow]
---

# OrderSummaryCreatedEvent

> Notifies subscribers of the creation of an order summary record. Use this event
      to trigger flows and processes in your order workflow.

# OrderSummaryCreatedEvent

Notifies subscribers of the creation of an order summary record. Use this event to trigger flows and processes in your order workflow.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see OrderSummaryCreatedEvent in the Platform Events Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EventUuid | Order Summary Created Event Event UUID | string |  | 36 |  |  |
| OrderId | Order ID | reference |  | 18 |  |  |
| OrderSummaryId | Order Summary ID | reference |  | 18 |  |  |
| ReplayId | Order Summary Created Event Replay ID | string |  | 1000 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
