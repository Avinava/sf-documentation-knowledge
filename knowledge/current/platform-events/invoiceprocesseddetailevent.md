---
title: "InvoiceProcessedDetailEvent"
domain: platform-events
topic: invoiceprocesseddetailevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:28.729Z
estimatedTokens: 460
keywords: [InvoiceProcessedDetailEvent, Notifies, subscribers, results, attempt, invoice, billing, schedules, part, commerce, invoices, share, grouping, key, action]
---

# InvoiceProcessedDetailEvent

> Notifies subscribers of the results of an attempt to create an invoice
			from billing schedules as part of /commerce/billing/invoices. InvoiceProcessedDetailEvent contains the
			results of an attempt to create an invoice from one or more billing schedules that share
			a grouping key. Each InvoiceProcessedDetailEvent for an action is grouped within the
			parent object InvoiceProcessedEvent. This object is available in API version 55.0
		and later.

# InvoiceProcessedDetailEvent

Notifies subscribers of the results of an attempt to create an invoice from billing schedules as part of /commerce/billing/invoices. InvoiceProcessedDetailEvent contains the results of an attempt to create an invoice from one or more billing schedules that share a grouping key. Each InvoiceProcessedDetailEvent for an action is grouped within the parent object InvoiceProcessedEvent. This object is available in API version 55.0 and later.

## Supported Calls

describeSObjects()

## Event Delivery Allocation Enforced

No

## Special Access Rules

This object is available when Subscription Management is enabled.

## Fields

| Field | Details |
| --- | --- |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. |
| InvoiceErrorDetailEvents | TypeInvoiceErrorDetailEvent[]PropertiesNillableDescriptionA list of errors that occurred while attempting to create the invoice. |
| InvoiceId | TypereferencePropertiesNillableDescriptionThe ID of the new invoice.This field is a relationship field that refers to an invoice.Relationship NameInvoiceRelationship TypeLookupRefers ToInvoice |
| InvoiceStatus | TypestringPropertiesNillableDescriptionThe value of the Status field on the invoice. |
| IsSuccess | TypebooleanPropertiesDefaulted on createDescriptionIndicates whether the invoice creation attempt was successful.The default value is false. |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
