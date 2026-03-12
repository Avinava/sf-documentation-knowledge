---
title: "PendingOrdSumProcEvent"
domain: sfFieldRef
topic: pendingordsumprocevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:07.533Z
estimatedTokens: 318
keywords: [PendingOrdSumProcEvent, Notifies, subscribers, PendingOrderSummary, record, processed, process, succeeded, OrderSummary, created, deleted, event, trigger, flows, order]
---

# PendingOrdSumProcEvent

> Notifies subscribers that a PendingOrderSummary record was processed. If the
      process succeeded, an OrderSummary was created and the PendingOrderSummary can be deleted. Use
      this event to trigger subscribers such as flows in your order workflow. This object is
    available in API version 56.0 and later.

# PendingOrdSumProcEvent

Notifies subscribers that a PendingOrderSummary record was processed. If the process succeeded, an OrderSummary was created and the PendingOrderSummary can be deleted. Use this event to trigger subscribers such as flows in your order workflow. This object is available in API version 56.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see PendingOrdSumProcEvent in the Platform Events Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| ErrorCode | Error Code | string |  | 255 |  |  |
| ErrorMessage | Error Message | string |  | 255 |  |  |
| EventUuid | Pending Order Summary Processed Event Event UUID | string |  | 36 |  |  |
| ExternalReferenceIdentifier | External Reference Identifier | string |  | 255 |  |  |
| IsRetry | Is Retry | boolean |  |  |  |  |
| IsSuccess | Is Success | boolean |  |  |  |  |
| OrderId | Order ID | reference |  | 18 |  |  |
| ReplayId | Pending Order Summary Processed Event Replay ID | string |  | 1000 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
