---
title: "InvoiceProcessedEvent"
domain: platform-events
topic: invoiceprocessedevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:28.737Z
estimatedTokens: 822
keywords: [InvoiceProcessedEvent, Notifies, subscribers, process, started, commerce, billing, invoices, groups, schedules, grouping, keys, creates, invoice, per]
---

# InvoiceProcessedEvent

> Notifies subscribers when the process started by the /commerce/billing/invoices request is complete. The
			process groups billing schedules by grouping keys and creates one invoice per grouping
			key. InvoiceProcessedEvent is a top-level object
			that contains a list of InvoiceProcessedDetailEvents, where each detail event represents an
			attempt to create one invoice. This object is available in API version 55.0 and
		later.

# InvoiceProcessedEvent

Notifies subscribers when the process started by the /commerce/billing/invoices request is complete. The process groups billing schedules by grouping keys and creates one invoice per grouping key. InvoiceProcessedEvent is a top-level object that contains a list of InvoiceProcessedDetailEvents, where each detail event represents an attempt to create one invoice. This object is available in API version 55.0 and later.

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

/event/InvoiceProcessedEvent

## Event Delivery Allocation Enforced

No

## Special Access Rules

This object is available when Subscription Management is enabled.

## Fields

| Field | Details |
| --- | --- |
| CorrelationIdentifier | TypestringPropertiesNillableDescriptionReserved for future use. |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. |
| InvoiceErrorDetailEvent | TypeInvoiceErrorDetailEvent[]PropertiesNillableDescriptionContains information about errors that occurred during processing. |
| InvoiceProcessedDetailEvent | TypeInvoiceProcessedDetailEvent[]PropertiesNillableDescriptionA list of InvoiceProcessedDetailEvent records. Each record contains information about an attempt to create an invoice from one or more billing schedules that share a grouping key. |
| IsSuccess | TypebooleanPropertiesDefaulted on createDescriptionIndicates whether the Create Order from Invoice action was successful.The default value is false. |
| ReplayId | TypestringPropertiesNillableDescriptionRepresents an ID value that is populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
| RequestIdentifier | TypestringPropertiesNillableDescriptionThe unique ID returned in the /commerce/billing/invoices response. Use this ID to identify the event for a specific request. |

-   **[InvoiceErrorDetailEvent](atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_invoiceerrordetailevent.htm)**
    Contains information about errors that occurred during the processing of a /commerce/billing/invoices request. This object is included in an InvoiceProcessedEvent message. You can't subscribe to InvoiceErrorDetailEvent directly. This object is available in API version 55.0 and later.
-   **[InvoiceProcessedDetailEvent](atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_invoiceprocesseddetailevent.htm)**
    Notifies subscribers of the results of an attempt to create an invoice from billing schedules as part of /commerce/billing/invoices. InvoiceProcessedDetailEvent contains the results of an attempt to create an invoice from one or more billing schedules that share a grouping key. Each InvoiceProcessedDetailEvent for an action is grouped within the parent object InvoiceProcessedEvent. This object is available in API version 55.0 and later.

## Related Topics

- InvoiceErrorDetailEvent[] (atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_invoiceerrordetailevent.htm)
- InvoiceProcessedDetailEvent[] (atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_invoiceprocesseddetailevent.htm)
- InvoiceErrorDetailEvent (atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_invoiceerrordetailevent.htm)
- InvoiceProcessedDetailEvent (atlas.en-us.platform_events.meta/platform_events/sforce_api_objects_invoiceprocesseddetailevent.htm)
