---
title: "InvoiceProcessedEvent"
domain: sfFieldRef
topic: invoiceprocessedevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:01.984Z
estimatedTokens: 340
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

This guide only lists certain information for each object. For more information, including descriptions of the fields, see InvoiceProcessedEvent in the Billing Guide and Platform Events Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CorrelationIdentifier | Correlation Identifier | string |  | 80 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EventUuid | Event UUID | string |  | 36 |  |  |
| InvoiceErrorDetailEvent | Invoice Error Detail Event ID | complexvalue |  |  |  |  |
| InvoiceProcessedDetailEvents | Invoice Processed Detail Event ID | complexvalue |  |  |  |  |
| IsSuccess | Success | boolean |  |  |  |  |
| ReplayId | Replay ID | string |  | 1000 |  |  |
| RequestIdentifier | Request Identifier | string |  | 80 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
