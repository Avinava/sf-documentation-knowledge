---
title: "InvoiceProcPymtExclEvent"
domain: platform-events
topic: invoiceprocpymtexclevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:28.743Z
estimatedTokens: 589
keywords: [InvoiceProcPymtExclEvent, notification, subscribers, regarding, results, commerce, invoicing, invoices, collection, actions, generate, invoice, billing, schedules, processing]
---

# InvoiceProcPymtExclEvent

> Represents the notification to the subscribers regarding the results of /commerce/invoicing/invoices/collection/actions/generate
		request to generate an invoice from billing schedules without processing payments.  This
		object is available in API version 63.0 and later.

# InvoiceProcPymtExclEvent

Represents the notification to the subscribers regarding the results of /commerce/invoicing/invoices/collection/actions/generate request to generate an invoice from billing schedules without processing payments. This object is available in API version 63.0 and later.

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

/event/InvoiceProcPymtExclEvent

## Event Delivery Allocation Enforced

Yes

## Special Access Rules

This object is available if Subscription Management or Commerce Subscriptions is enabled. If your org has both Subscription Management and Commerce Subscriptions enabled, then Subscription Management takes precedence. You need the Billing Operations User permission set to access this object.

## Fields

| Field | Details |
| --- | --- |
| CorrelationIdentifier | TypestringPropertiesNillableDescriptionThe unique ID of the request for generating invoices. |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. |
| InvoiceErrorDetailEvent | TypetextareaPropertiesNillableDescriptionThe InvoiceErrorDetailEvent record when an error occurs before the processing starts. |
| InvoiceProcDetailEventList | TypetextareaPropertiesNillableDescriptionA list of related InvoiceProcessedDetailEvent records. A single InvoiceProcessedDetailEvent record is created for each invoice. |
| IsSuccess | TypebooleanPropertiesDefaulted on createDescriptionIndicates whether the request was successful or not.The default value is false. |
| PaymentExclusionReason | TypestringPropertiesNillableDescriptionThe reason for the exclusion of payment for the invoice. |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
| RequestIdentifier | TypestringPropertiesNillableDescriptionThe unique ID of the request for generating invoices. |
