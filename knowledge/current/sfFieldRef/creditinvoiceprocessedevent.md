---
title: "CreditInvoiceProcessedEvent"
domain: sfFieldRef
topic: creditinvoiceprocessedevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:55.000Z
estimatedTokens: 307
keywords: [CreditInvoiceProcessedEvent, Notifies, subscribers, process, started, commerce, invoicing, invoices, invoiceId, actions, credit, API, version, 55.0, later]
---

# CreditInvoiceProcessedEvent

> Notifies subscribers when the process started by the /commerce/invoicing/invoices/{invoiceId}/actions/credit
			request is complete. This object is available in API version 55.0 and
		later.

# CreditInvoiceProcessedEvent

Notifies subscribers when the process started by the /commerce/invoicing/invoices/{invoiceId}/actions/credit request is complete. This object is available in API version 55.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see CreditInvoiceProcessedEvent in the Billing Guide and Platform Events Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CorrelationIdentifier | Correlation Identifier | string |  | 80 |  |  |
| CrMemoProcessErrDtlEvents | Credit Memo Processed Error Detail Event ID | complexvalue |  |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CreditMemoId | Credit Memo ID | reference |  | 18 |  |  |
| ErrorDetails | Error Details | string |  | 2000 |  |  |
| EventUuid | Event UUID | string |  | 36 |  |  |
| InvoiceId | Invoice ID | reference |  | 18 |  |  |
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
