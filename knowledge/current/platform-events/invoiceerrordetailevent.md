---
title: "InvoiceErrorDetailEvent"
domain: platform-events
topic: invoiceerrordetailevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:28.724Z
estimatedTokens: 277
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

## Supported Calls

describeSObjects()

## Special Access Rules

This object is available when Subscription Management is enabled.

## Fields

| Field | Details |
| --- | --- |
| ErrorCode | TypestringPropertiesNoneDescriptionReference code for the type of error that occurred. |
| ErrorMessage | TypestringPropertiesNoneDescriptionInformation about the error that occurred during processing. |
| ErrorSourceId | TypereferencePropertiesNillableDescriptionThe ID of the record where the error occurred. Can be an invoice or a billing schedule.This field is a polymorphic relationship field.Relationship NameErrorSourceRelationship TypeLookupRefers ToInvoice |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. |
