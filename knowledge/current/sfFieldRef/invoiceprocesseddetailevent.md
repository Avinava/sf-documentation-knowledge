---
title: "InvoiceProcessedDetailEvent"
domain: sfFieldRef
topic: invoiceprocesseddetailevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:01.979Z
estimatedTokens: 305
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

This guide only lists certain information for each object. For more information, including descriptions of the fields, see InvoiceProcessedDetailEvent in the Billing Guide and Platform Events Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EventUuid | Event UUID | string |  | 36 |  |  |
| InvoiceErrorDetailEvents | Invoice Error Detail Event ID | complexvalue |  |  |  |  |
| InvoiceId | Invoice ID | reference |  | 18 |  |  |
| InvoiceStatus | Invoice Status | string |  | 50 |  |  |
| IsSuccess | Success | boolean |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
