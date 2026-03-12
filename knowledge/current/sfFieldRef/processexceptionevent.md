---
title: "ProcessExceptionEvent"
domain: sfFieldRef
topic: processexceptionevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:08.919Z
estimatedTokens: 343
keywords: [ProcessExceptionEvent, Notifies, subscribers, errors, occur, payment, processing, capture, apply, refund, order, summary, event, trigger, flows]
---

# ProcessExceptionEvent

> Notifies subscribers of errors that occur during payment processing
			(capture, apply, and refund) on an order summary. Use this event to trigger subscribers
			such as flows in your order workflow. This object is available in API version 50.0
		and later.

# ProcessExceptionEvent

Notifies subscribers of errors that occur during payment processing (capture, apply, and refund) on an order summary. Use this event to trigger subscribers such as flows in your order workflow. This object is available in API version 50.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see ProcessExceptionEvent in the Platform Events Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AssetId | Asset ID | reference |  | 18 |  |  |
| AttachedToId | Attached To ID | reference |  | 18 |  |  |
| BackgroundOperationId | Background Operation ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | textarea |  | 2000 |  |  |
| EventUuid | Process Exception Event Event UUID | string |  | 36 |  |  |
| ExceptionType | Exception Type | picklist |  | 40 |  |  |
| ExternalReference | External Reference | string |  | 255 |  |  |
| GroupById | Group By ID | reference |  | 18 |  |  |
| Message | Message | string |  | 255 |  |  |
| ReplayId | Process Exception Event Replay ID | string |  | 1000 |  |  |
| Severity | Severity | picklist |  | 40 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
