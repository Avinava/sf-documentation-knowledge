---
title: "InvoiceProcessedDetailEvent"
domain: revenue-cloud
topic: invoiceprocesseddetailevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:11.699Z
estimatedTokens: 433
keywords: [InvoiceProcessedDetailEvent, notification, customers, regarding, results, attempt, invoice, billing, schedules, part, commerce, invoices, platform, event, share]
---

# InvoiceProcessedDetailEvent

> Represents the notification to customers regarding the results of an
         attempt to create an invoice from billing schedules as part of /commerce/billing/invoices request. The InvoiceProcessedDetailEvent platform event contains the results of an attempt
         to create an invoice from one or more billing schedules that share a grouping key. Each
            InvoiceProcessedDetailEventplatform event for an
         action is grouped within the parent InvoiceProcessedDetailEvent platform event. This object is available in
      API version 62.0 and later.

# InvoiceProcessedDetailEvent

Represents the notification to customers regarding the results of an attempt to create an invoice from billing schedules as part of /commerce/billing/invoices request. The InvoiceProcessedDetailEvent platform event contains the results of an attempt to create an invoice from one or more billing schedules that share a grouping key. Each InvoiceProcessedDetailEventplatform event for an action is grouped within the parent InvoiceProcessedDetailEvent platform event. This object is available in API version 62.0 and later.

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
| EventUuid | TypestringPropertiesNillableDescriptionA universally unique identifier (UUID) that identifies a platform event message. |
| InvoiceErrorDetailEvents | TypeInvoiceErrorDetailEvent[]PropertiesNillableDescriptionA list of errors that occurred while attempting to create the invoice. |
| InvoiceId | TypereferencePropertiesNillableDescriptionThe ID of the new invoice.This field is a relationship field.Relationship NameInvoiceRefers ToInvoice |
| InvoiceStatus | TypestringPropertiesNillableDescriptionThe value of the Status field on the invoice. |
| IsSuccess | TypebooleanPropertiesDefaulted on createDescriptionRequired. Indicates whether the invoice creation attempt was successful (true) or not (false).The default value is false. |

## Related Topics

- InvoiceErrorDetailEvent (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_invoiceerrordetailevent.htm)
