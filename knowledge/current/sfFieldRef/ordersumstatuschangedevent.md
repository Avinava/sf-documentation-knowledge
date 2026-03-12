---
title: "OrderSumStatusChangedEvent"
domain: sfFieldRef
topic: ordersumstatuschangedevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:06.031Z
estimatedTokens: 250
keywords: [OrderSumStatusChangedEvent, Notifies, subscribers, changes, status, order, summary, record, event, trigger, flows, workflow]
---

# OrderSumStatusChangedEvent

> Notifies subscribers of changes to the status of an order summary record. Use
      this event to trigger subscribers such as flows in your order workflow.

# OrderSumStatusChangedEvent

Notifies subscribers of changes to the status of an order summary record. Use this event to trigger subscribers such as flows in your order workflow.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see OrderSumStatusChangedEvent in the Platform Events Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EventUuid | Order Summary Status Changed Event Event UUID | string |  | 36 |  |  |
| NewStatus | New Status | picklist |  | 40 |  |  |
| OldStatus | Old Status | picklist |  | 40 |  |  |
| OrderId | Order ID | reference |  | 18 |  |  |
| OrderSummaryId | Order Summary ID | reference |  | 18 |  |  |
| ReplayId | Order Summary Status Changed Event Replay Id | string |  | 1000 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
