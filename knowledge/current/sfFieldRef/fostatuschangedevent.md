---
title: "FOStatusChangedEvent"
domain: sfFieldRef
topic: fostatuschangedevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:57.842Z
estimatedTokens: 287
keywords: [FOStatusChangedEvent, Notifies, subscribers, changes, status, fulfillment, order, record, event, trigger, flows, processes, workflow, API, version]
---

# FOStatusChangedEvent

> Notifies subscribers of changes to the status of a fulfillment order record.
      Use this event to trigger flows and processes in your order workflow. This object is
    available in API version 48.0 and later.

# FOStatusChangedEvent

Notifies subscribers of changes to the status of a fulfillment order record. Use this event to trigger flows and processes in your order workflow. This object is available in API version 48.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see FOStatusChangedEvent in the Platform Events Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EventUuid | Fulfillment Order Status Changed Event Event UUID | string |  | 36 |  |  |
| FulfillmentOrderId | Fulfillment Order ID | reference |  | 18 |  |  |
| NewStatus | New Status | picklist |  | 40 |  |  |
| NewStatusCategory | New Status Category | picklist |  | 255 |  |  |
| OldStatus | Old Status | picklist |  | 40 |  |  |
| OldStatusCategory | Old Status Category | picklist |  | 255 |  |  |
| ReplayId | Fulfillment Order Status Changed Event Replay ID | string |  | 1000 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
