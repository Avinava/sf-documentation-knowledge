---
title: "CrMemoProcessErrDtlEvent"
domain: platform-events
topic: crmemoprocesserrdtlevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:28.508Z
estimatedTokens: 376
keywords: [CrMemoProcessErrDtlEvent, errors, occurred, creating, applying, credit, memo, part, included, CreditInvoiceProcessedEvent, CreditMemoProcessedEvent, NegInvcLineProcessedEvent, VoidInvoiceProcessedEvent, message, can't]
---

# CrMemoProcessErrDtlEvent

> Contains information about errors that occurred while creating or applying
			a credit memo as part of a request. This object is included in a CreditInvoiceProcessedEvent, CreditMemoProcessedEvent, NegInvcLineProcessedEvent, or VoidInvoiceProcessedEvent message. You can't subscribe to CrMemoProcessErrDtlEvent directly. This object is
		available in API versions 55.0–58.0. In API version 58.0, this field returns a null
		result. See the ErrorDetails field on the CreditInvoiceProcessedEvent, CreditMemoProcessedEvent, NegInvcLineProcessedEvent, or VoidInvoiceProcessedEvent object for error information.

# CrMemoProcessErrDtlEvent

Contains information about errors that occurred while creating or applying a credit memo as part of a request. This object is included in a CreditInvoiceProcessedEvent, CreditMemoProcessedEvent, NegInvcLineProcessedEvent, or VoidInvoiceProcessedEvent message. You can't subscribe to CrMemoProcessErrDtlEvent directly. This object is available in API versions 55.0–58.0. In API version 58.0, this field returns a null result. See the ErrorDetails field on the CreditInvoiceProcessedEvent, CreditMemoProcessedEvent, NegInvcLineProcessedEvent, or VoidInvoiceProcessedEvent object for error information.

## Supported Calls

describeSObjects()

## Special Access Rules

This object is available when Subscription Management is enabled.

## Fields

| Field | Details |
| --- | --- |
| ErrorCode | TypestringPropertiesNillableDescriptionReference code for the type of error that occurred. |
| ErrorMessage | TypestringPropertiesNillableDescriptionInformation about the error that occurred during processing. |
| ErrorSourceId | TypereferencePropertiesNillableDescriptionThe ID of the record on which the error occurred during the credit memo creation process and the application process.This field is a polymorphic relationship field.Relationship NameErrorSourceRelationship TypeLookupRefers ToCreditMemo, CreditMemoLine, Invoice, InvoiceLine |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. |
