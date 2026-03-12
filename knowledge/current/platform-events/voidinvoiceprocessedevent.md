---
title: "VoidInvoiceProcessedEvent"
domain: platform-events
topic: voidinvoiceprocessedevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:29.335Z
estimatedTokens: 698
keywords: [VoidInvoiceProcessedEvent, Notifies, subscribers, process, started, commerce, invoicing, invoices, invoiceId, actions, attempts, invoice, crediting, changing, status]
---

# VoidInvoiceProcessedEvent

> Notifies subscribers when the process started by the /commerce/invoicing/invoices/{invoiceId}/actions/void request is complete.
			The request attempts to void an invoice by crediting an invoice and changing its status
			to Voided, which prevents further changes. This object is available in API version
		55.0 and later. This object is available in API version 55.0 and later.

# VoidInvoiceProcessedEvent

Notifies subscribers when the process started by the /commerce/invoicing/invoices/{invoiceId}/actions/void request is complete. The request attempts to void an invoice by crediting an invoice and changing its status to Voided, which prevents further changes. This object is available in API version 55.0 and later. This object is available in API version 55.0 and later.

## Supported Calls

describeSObjects()

## Supported Subscribers

| Subscriber | Supported? |
| --- | --- |
| Apex Triggers |  |
| Flows |  |
| Processes |  |
| Pub/Sub API |  |
| Streaming API (CometD) |  |

## Subscription Channel

/event/VoidInvoiceProcessedEvent

## Event Delivery Allocation Enforced

No

## Special Access Rules

This object is available when Subscription Management is enabled.

## Fields

| Field | Details |
| --- | --- |
| CorrelationIdentifier | TypestringPropertiesNillableDescriptionReserved for future use. |
| CrMemoProcessErrDtlEvents | TypeCrMemoProcessErrDtlEvent[]PropertiesNillableDescriptionContains a list of error messages and error codes if the request failed. This field is available only in API versions 55.0–58.0.See the ErrorDetails field for error messages and error codes. |
| CreditMemoId | TypereferencePropertiesNillableDescriptionThe credit memo created to void the invoice as the result of a successful request.This field is a relationship field.Relationship NameCreditMemoRelationship TypeLookupRefers ToCreditMemo |
| ErrorDetails | TypestringPropertiesNillableDescriptionIf the request fails, this field shows error messages, error codes, and the ID of the record on which the errors occurred. This field is available in API 58.0 and later. |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. |
| InvoiceId | TypereferencePropertiesNillableDescriptionThe invoice that was voided as the result of a successful request.This field is a relationship field.Relationship NameInvoiceRelationship TypeLookupRefers ToInvoice |
| IsSuccess | TypebooleanPropertiesDefaulted on createDescriptionIndicates whether the request was successful.The default value is 'false'. |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
| RequestIdentifier | TypestringPropertiesNillableDescriptionThe unique ID returned in the /commerce/billing/invoices/{invoiceId}/actions/void response. Use this ID to identify the event for a specific request. |
