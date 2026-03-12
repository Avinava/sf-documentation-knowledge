---
title: "CreditInvoiceProcessedEvent"
domain: platform-events
topic: creditinvoiceprocessedevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:28.493Z
estimatedTokens: 819
keywords: [CreditInvoiceProcessedEvent, Notifies, subscribers, process, started, commerce, invoicing, invoices, invoiceId, actions, credit, API, version, 55.0, later]
---

# CreditInvoiceProcessedEvent

> Notifies subscribers when the process started by the /commerce/invoicing/invoices/{invoiceId}/actions/credit
			request is complete. This object is available in API version 55.0 and
		later.

# CreditInvoiceProcessedEvent

Notifies subscribers when the process started by the /commerce/invoicing/invoices/{invoiceId}/actions/credit request is complete. This object is available in API version 55.0 and later.

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

/event/CreditInvoiceProcessedEvent

## Event Delivery Allocation Enforced

No

## Special Access Rules

This object is available when Subscription Management is enabled.

## Fields

| Field | Details |
| --- | --- |
| CorrelationIdentifier | TypestringPropertiesNillableDescriptionReserved for future use. |
| CrMemoProcessErrDtlEvents | TypeCreditMemoProcessedErrDtlEvent[]PropertiesNillableDescriptionContains a list of error messages and error codes if the request failed. This field is available only in API versions 55.0–58.0.See the ErrorDetails field for error messages and error codes. |
| CreditMemoId | TypereferencePropertiesNillableDescriptionThe credit memo created as the result of a successful request.This field is a relationship field.Relationship NameCreditMemoRelationship TypeLookupRefers ToCreditMemo |
| ErrorDetails | TypestringPropertiesNillableDescriptionIf the request fails, this field shows error messages, error codes, and the ID of the record on which the errors occurred. This field is available in API 58.0 and later. |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. |
| InvoiceId | TypereferencePropertiesNillableDescriptionThe invoice credited as the result of a successful request.This field is a relationship field.Relationship NameInvoiceRelationship TypeLookupRefers ToInvoice |
| IsSuccess | TypebooleanPropertiesDefaulted on createDescriptionIndicates whether the request was successful.The default value is 'false'. |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
| RequestIdentifier | TypestringPropertiesNillableDescriptionThe unique ID returned in the response. Use this ID to identify the event for a specific request. |

-   **[CrMemoProcessErrDtlEvent](atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_crmemoprocesserrdtlevent.htm)**
    Contains information about errors that occurred while creating or applying a credit memo as part of a request. This object is included in a CreditInvoiceProcessedEvent, CreditMemoProcessedEvent, NegInvcLineProcessedEvent, or VoidInvoiceProcessedEvent message. You can't subscribe to CrMemoProcessErrDtlEvent directly. This object is available in API versions 55.0–58.0. In API version 58.0, this field returns a null result. See the ErrorDetails field on the CreditInvoiceProcessedEvent, CreditMemoProcessedEvent, NegInvcLineProcessedEvent, or VoidInvoiceProcessedEvent object for error information.

## Related Topics

- CreditMemoProcessedErrDtlEvent[] (atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_crmemoprocesserrdtlevent.htm)
- CrMemoProcessErrDtlEvent (atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_crmemoprocesserrdtlevent.htm)
