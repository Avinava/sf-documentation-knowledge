---
title: "NegInvcLineProcessedEvent"
domain: sfFieldRef
topic: neginvclineprocessedevent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:04.775Z
estimatedTokens: 307
keywords: [NegInvcLineProcessedEvent, Notifies, subscribers, negative, invoice, line, converted, credit, memo, API, version, 56.0, later]
---

# NegInvcLineProcessedEvent

> Notifies subscribers when a negative invoice line is converted to a credit
         memo. This object is available in API version 56.0 and later.

# NegInvcLineProcessedEvent

Notifies subscribers when a negative invoice line is converted to a credit memo. This object is available in API version 56.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see NegInvcLineProcessedEvent in the Billing Guide and Platform Events Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CorrelationIdentifier | Correlation Identifier | string |  | 80 |  |  |
| CrMemoProcessErrDtlEvents | Credit Memo Processed Error Detail Event ID | complexvalue |  |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| ErrorDetails | Error Details | string |  | 2000 |  |  |
| EventUuid | Event UUID | string |  | 36 |  |  |
| InvoiceId | Invoice ID | reference |  | 18 |  |  |
| IsAutomatedNegativeInvoiceLineConversion | Automated Negative Invoice Line Conversion | boolean |  |  |  |  |
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
