---
title: "FulfillOrdItemQtyChgEvent"
domain: sfFieldRef
topic: fulfillorditemqtychgevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:58.730Z
estimatedTokens: 267
keywords: [FulfillOrdItemQtyChgEvent, Notifies, subscribers, changes, quantity, fulfillment, order, line, item, record, event, trigger, flows, processes, workflow]
---

# FulfillOrdItemQtyChgEvent

> Notifies subscribers of changes to the quantity of a fulfillment order line
      item record. Use this event to trigger flows and processes in your order workflow. This
    object is available in API version 53.0 and later.

# FulfillOrdItemQtyChgEvent

Notifies subscribers of changes to the quantity of a fulfillment order line item record. Use this event to trigger flows and processes in your order workflow. This object is available in API version 53.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see FulfillOrdItemQtyChgEvent in the Platform Events Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EventUuid | Fulfillment Order Item Quantity Changed Event Event UUID | string |  | 36 |  |  |
| FulfillmentOrderLineItemId | Fulfillment Order Product ID | reference |  | 18 |  |  |
| NewQuantity | New Quantity | double |  |  | 18 | 0 |
| OldQuantity | Old Quantity | double |  |  | 18 | 0 |
| ReplayId | Fulfillment Order Item Quantity Changed Event Replay ID | string |  | 1000 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
