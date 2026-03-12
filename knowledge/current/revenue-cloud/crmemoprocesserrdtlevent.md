---
title: "CrMemoProcessErrDtlEvent"
domain: revenue-cloud
topic: crmemoprocesserrdtlevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:10.094Z
estimatedTokens: 319
keywords: [CrMemoProcessErrDtlEvent, Represents, information, errors, occurred, while, creating, applying, credit, memo, part, request., included, CreditInvoiceProcessedEvent, CreditMemoProcessedEvent, NegInvcLineProcessedEvent, VoidInvoiceProcessedEvent, platform, event, message.]
---

# CrMemoProcessErrDtlEvent

> Represents the information about errors that occurred while creating
         or applying a credit memo as part of a request. This object is included in a CreditInvoiceProcessedEvent, CreditMemoProcessedEvent, NegInvcLineProcessedEvent, or VoidInvoiceProcessedEvent platform event message. You can't subscribe
            to CrMemoProcessErrDtlEvent platform event
         directly. This object is available in API version 62.0 and later.

# CrMemoProcessErrDtlEvent

Represents the information about errors that occurred while creating or applying a credit memo as part of a request. This object is included in a CreditInvoiceProcessedEvent, CreditMemoProcessedEvent, NegInvcLineProcessedEvent, or VoidInvoiceProcessedEvent platform event message. You can't subscribe to CrMemoProcessErrDtlEvent platform event directly. This object is available in API version 62.0 and later.

## Supported Calls

describeSObjects()

## Special Access Rules

This object is available when Billing is enabled.

## Fields

| Field | Details |
| --- | --- |
| ErrorCode | TypestringPropertiesNillableDescriptionReference code for the type of error that occurred. |
| ErrorMessage | TypestringPropertiesNillableDescriptionInformation about the error that occurred during processing. |
| ErrorSourceId | TypereferencePropertiesNillableDescriptionThe ID of the record on which the error occurred during the credit memo creation process and the application process.This field is a polymorphic relationship field.Relationship NameErrorSourceRefers ToCreditMemo, CreditMemoLine, Invoice, InvoiceLine |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. |
