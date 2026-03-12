---
title: "InvoiceProcessedEvent"
domain: revenue-cloud
topic: invoiceprocessedevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:10.626Z
estimatedTokens: 890
keywords: [InvoiceProcessedEvent, Represents, notification, customers, after, process, started, commerce, billing, invoices, request, complete., groups, schedules, grouping, keys, creates, invoice, per, key.]
---

# InvoiceProcessedEvent

> Represents the notification to the customers after the process
         started by the /commerce/billing/invoices request is
         complete. The process groups billing schedules by grouping keys and creates one invoice per
         grouping key. The InvoiceProcessedEvent platform event
         is a top-level object that contains a list of InvoiceProcessedDetailEvents platform events, where each detail event
         represents an attempt to create one invoice. This object is available in API version
      62.0 and later.

# InvoiceProcessedEvent

Represents the notification to the customers after the process started by the /commerce/billing/invoices request is complete. The process groups billing schedules by grouping keys and creates one invoice per grouping key. The InvoiceProcessedEvent platform event is a top-level object that contains a list of InvoiceProcessedDetailEvents platform events, where each detail event represents an attempt to create one invoice. This object is available in API version 62.0 and later.

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

This object is available when Billing is enabled.

## Fields

| Field | Details |
| --- | --- |
| CorrelationIdentifier | TypestringPropertiesNillableDescriptionReserved for future use. |
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. |
| InvoiceErrorDetailEvent | TypeInvoiceErrorDetailEvent[]PropertiesNillableDescriptionInformation about errors that occurred during processing. |
| InvoiceProcessedDetailEvents | TypeInvoiceProcessedDetailEvent[]PropertiesNillableDescriptionA list of InvoiceProcessedDetailEvent records. Each record contains information about an attempt to create an invoice from one or more billing schedules that share a grouping key. |
| IsSuccess | TypebooleanPropertiesDefaulted on createDescriptionRequired. Indicates whether the Create Order from Invoice action was successful (true) or not (false).The default value is false. |
| ReplayId | TypestringPropertiesNillableDescriptionAn identification (ID) value that’s populated by the system and refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A user can store a replay ID value and use it on resubscription to retrieve missed events that are within the retention window. |
| RequestIdentifier | TypestringPropertiesNillableDescriptionA unique ID returned in the /commerce/billing/invoices response. Use this ID to identify the event for a specific request. |

-   **[InvoiceErrorDetailEvent](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_invoiceerrordetailevent.htm)**
    Represents information about the errors that occurred during the processing of a /commerce/billing/invoices request. This object is included in an InvoiceProcessedEvent platform event message. You can't subscribe to InvoiceProcessedEvent platform event directly. This object is available in API version 62.0 and later.
-   **[InvoiceProcessedDetailEvent](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_invoiceprocesseddetailevent.htm)**
    Represents the notification to customers regarding the results of an attempt to create an invoice from billing schedules as part of /commerce/billing/invoices request. The InvoiceProcessedDetailEvent platform event contains the results of an attempt to create an invoice from one or more billing schedules that share a grouping key. Each InvoiceProcessedDetailEventplatform event for an action is grouped within the parent InvoiceProcessedDetailEvent platform event. This object is available in API version 62.0 and later.

## Related Topics

- InvoiceErrorDetailEvent[] (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_invoiceerrordetailevent.htm)
- InvoiceProcessedDetailEvent[] (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_invoiceprocesseddetailevent.htm)
- InvoiceErrorDetailEvent (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_invoiceerrordetailevent.htm)
- InvoiceProcessedDetailEvent (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_invoiceprocesseddetailevent.htm)
