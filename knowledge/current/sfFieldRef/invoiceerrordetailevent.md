---
title: "InvoiceErrorDetailEvent"
domain: sfFieldRef
topic: invoiceerrordetailevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:01.878Z
estimatedTokens: 245
keywords: [InvoiceErrorDetailEvent, errors, occurred, processing, commerce, billing, invoices, included, InvoiceProcessedEvent, message, can't, subscribe, directly, API, version]
---

# InvoiceErrorDetailEvent

> Contains information about errors that occurred during the processing
			of a /commerce/billing/invoices request. This
		object is included in an InvoiceProcessedEvent message.
		You can't subscribe to InvoiceErrorDetailEvent
		directly. This object is available in API version 55.0 and later.

# InvoiceErrorDetailEvent

Contains information about errors that occurred during the processing of a /commerce/billing/invoices request. This object is included in an InvoiceProcessedEvent message. You can't subscribe to InvoiceErrorDetailEvent directly. This object is available in API version 55.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see InvoiceErrorDetailEvent in the Billing Guide and Platform Events Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| ErrorCode | Error Code | string |  | 255 |  |  |
| ErrorMessage | Error Message | string |  | 1000 |  |  |
| ErrorSourceId | Error Source ID | reference |  | 18 |  |  |
| EventUuid | Event UUID | string |  | 36 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
