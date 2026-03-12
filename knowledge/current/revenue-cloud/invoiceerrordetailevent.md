---
title: "InvoiceErrorDetailEvent"
domain: revenue-cloud
topic: invoiceerrordetailevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:11.638Z
estimatedTokens: 283
keywords: [InvoiceErrorDetailEvent, errors, occurred, processing, commerce, billing, invoices, included, InvoiceProcessedEvent, platform, event, message, can't, subscribe, directly]
---

# InvoiceErrorDetailEvent

> Represents information about the errors that occurred during the
         processing of a /commerce/billing/invoices request.
         This object is included in an InvoiceProcessedEvent platform event message. You can't subscribe to InvoiceProcessedEvent platform event directly. This
      object is available in API version 62.0 and later.

# InvoiceErrorDetailEvent

Represents information about the errors that occurred during the processing of a /commerce/billing/invoices request. This object is included in an InvoiceProcessedEvent platform event message. You can't subscribe to InvoiceProcessedEvent platform event directly. This object is available in API version 62.0 and later.

## Supported Calls

describeSObjects()

## Special Access Rules

This object is available when Billing is enabled.

## Fields

| Field | Details |
| --- | --- |
| ErrorCode | TypestringPropertiesNoneDescriptionReference code for the type of error that occurred. |
| ErrorMessage | TypestringPropertiesNoneDescriptionInformation about the error that occurred during processing. |
| ErrorSourceId | TypereferencePropertiesNillableDescriptionThe ID of the record where the error occurred. This record can be an invoice or a billing schedule.This field is a polymorphic relationship field.Relationship NameErrorSourceRefers ToBillingSchedule, Invoice |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. |
