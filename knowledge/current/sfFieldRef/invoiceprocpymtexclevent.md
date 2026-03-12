---
title: "InvoiceProcPymtExclEvent"
domain: sfFieldRef
topic: invoiceprocpymtexclevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:01.975Z
estimatedTokens: 332
keywords: [InvoiceProcPymtExclEvent, notification, subscribers, regarding, results, commerce, invoicing, invoices, collection, actions, generate, invoice, billing, schedules, processing]
---

# InvoiceProcPymtExclEvent

> Represents the notification to the subscribers regarding the results of /commerce/invoicing/invoices/collection/actions/generate
		request to generate an invoice from billing schedules without processing payments.  This
		object is available in API version 63.0 and later.

# InvoiceProcPymtExclEvent

Represents the notification to the subscribers regarding the results of /commerce/invoicing/invoices/collection/actions/generate request to generate an invoice from billing schedules without processing payments. This object is available in API version 63.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see InvoiceProcPymtExclEvent in the Billing Guide and Platform Events Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CorrelationIdentifier | Correlation Identifier | string |  | 80 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EventUuid | Event UUID | string |  | 36 |  |  |
| InvoiceErrorDetailEvent | Invoice Processed Payment Excluded EventInvoice Error Detail Event | textarea |  | 32000 |  |  |
| InvoiceProcDetailEventList | Invoice Processed Detail Events | textarea |  | 32000 |  |  |
| IsSuccess | Success | boolean |  |  |  |  |
| PaymentExclusionReason | Payment Exclusion Reason | string |  | 100 |  |  |
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
