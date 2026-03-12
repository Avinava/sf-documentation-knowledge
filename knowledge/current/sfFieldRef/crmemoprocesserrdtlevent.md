---
title: "CrMemoProcessErrDtlEvent"
domain: sfFieldRef
topic: crmemoprocesserrdtlevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:54.808Z
estimatedTokens: 325
keywords: [CrMemoProcessErrDtlEvent, errors, occurred, creating, applying, credit, memo, part, included, CreditInvoiceProcessedEvent, CreditMemoProcessedEvent, NegInvcLineProcessedEvent, VoidInvoiceProcessedEvent, message, can't]
---

# CrMemoProcessErrDtlEvent

> Contains information about errors that occurred while creating or applying
			a credit memo as part of a request. This object is included in a CreditInvoiceProcessedEvent, CreditMemoProcessedEvent, NegInvcLineProcessedEvent, or VoidInvoiceProcessedEvent message. You can't subscribe to CrMemoProcessErrDtlEvent directly. This object is
		available in API versions 55.0–58.0. In API version 58.0, this field returns a null
		result. See the ErrorDetails field on the CreditInvoiceProcessedEvent, CreditMemoProcessedEvent, NegInvcLineProcessedEvent, or VoidInvoiceProcessedEvent object for error information.

# CrMemoProcessErrDtlEvent

Contains information about errors that occurred while creating or applying a credit memo as part of a request. This object is included in a CreditInvoiceProcessedEvent, CreditMemoProcessedEvent, NegInvcLineProcessedEvent, or VoidInvoiceProcessedEvent message. You can't subscribe to CrMemoProcessErrDtlEvent directly. This object is available in API versions 55.0–58.0. In API version 58.0, this field returns a null result. See the ErrorDetails field on the CreditInvoiceProcessedEvent, CreditMemoProcessedEvent, NegInvcLineProcessedEvent, or VoidInvoiceProcessedEvent object for error information.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see CrMemoProcessErrDtlEvent in the Billing Guide and Platform Events Developer Guide.

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
