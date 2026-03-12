---
title: "Billing Platform Events"
domain: revenue-cloud
topic: billing-platform-events
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:05.434Z
estimatedTokens: 859
keywords: [Billing, Platform, Events, Salesforce, publishes, standard, platform, events, response, action, occurred, org, report, errors., example, InvoiceProcessedEvent, event, sends, notification, customer]
---

# Billing Platform Events

> Salesforce publishes standard platform events in response to an action that occurred in
  the org or to report errors. For example, the InvoiceProcessedEvent platform event sends
  notification to the customer when the billing invoice activity is complete. You can subscribe to a
  standard platform event by using the subscription mechanism that the event supports.

# Billing Platform Events

Salesforce publishes standard platform events in response to an action that occurred in the org or to report errors. For example, the InvoiceProcessedEvent platform event sends notification to the customer when the billing invoice activity is complete. You can subscribe to a standard platform event by using the subscription mechanism that the event supports.

-   **[BillingScheduleCreatedEvent](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_billingschedulecreatedevent.htm)**
    Notifies subscribers when the /commerce/invoicing/billing-schedules/actions/create request is complete. This object is available in API version 63.0 and later.
-   **[CreditInvoiceProcessedEvent](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_creditinvoiceprocessedevent.htm)**
    Represents the notification to the customers after the process initiated by the /commerce/invoicing/invoices/{invoiceId}/actions/credit request is complete. This object is available in API version 62.0 and later.
-   **[CreditMemoProcessedEvent](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_creditmemoprocessedevent.htm)**
    Represents the notification to the customers after the process initiated by the /commerce/invoicing/credit-memos request is complete. This object is available in API version 62.0 and later.
-   **[InvoiceProcessedEvent](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_invoiceprocessedevent.htm)**
    Represents the notification to the customers after the process started by the /commerce/billing/invoices request is complete. The process groups billing schedules by grouping keys and creates one invoice per grouping key. The InvoiceProcessedEvent platform event is a top-level object that contains a list of InvoiceProcessedDetailEvents platform events, where each detail event represents an attempt to create one invoice. This object is available in API version 62.0 and later.
-   **[NegInvcLineProcessedEvent](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_neginvclineprocessedevent.htm)**
    Represents the notification to the customers when a negative invoice line is converted to a credit memo This object is available in API version 62.0 and later.
-   **[SequenceAssignedEvent](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_sequenceassignedevent.htm)**
    Represents the notification to customers about the assignment of a sequence to a target record. This process is initiated by the /sequences/actions/assign request. This object is available in API version 65.0 and later.
-   **[VoidInvoiceProcessedEvent](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_voidinvoiceprocessedevent.htm)**
    Represents the notification to the customers after the process started by the /commerce/invoicing/invoices/{invoiceId}/actions/void request is complete. The request attempts to void an invoice by crediting an invoice and changing its status to Voided, which prevents further changes. This object is available in API version 62.0 and later.

## Related Topics

- BillingScheduleCreatedEvent (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_billingschedulecreatedevent.htm)
- CreditInvoiceProcessedEvent (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_creditinvoiceprocessedevent.htm)
- CreditMemoProcessedEvent (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_creditmemoprocessedevent.htm)
- InvoiceProcessedEvent (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_invoiceprocessedevent.htm)
- NegInvcLineProcessedEvent (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_neginvclineprocessedevent.htm)
- SequenceAssignedEvent (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_sequenceassignedevent.htm)
- VoidInvoiceProcessedEvent (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/sforce_api_objects_voidinvoiceprocessedevent.htm)
