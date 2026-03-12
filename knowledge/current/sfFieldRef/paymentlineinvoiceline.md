---
title: "PaymentLineInvoiceLine"
domain: sfFieldRef
topic: paymentlineinvoiceline
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:07.306Z
estimatedTokens: 559
keywords: [PaymentLineInvoiceLine, payment, line, that's, applied, unapplied, invoice, API, version, 64.0, later]
---

# PaymentLineInvoiceLine

> Represents information about a payment line that's applied to or
         unapplied from an invoice line. This object is available in API version 64.0 and
      later.

# PaymentLineInvoiceLine

Represents information about a payment line that's applied to or unapplied from an invoice line. This object is available in API version 64.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see PaymentLineInvoiceLine in the Billing Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| Amount | Amount | currency |  |  | 18 | 2 |
| AppliedDateTime | Applied Date Time | datetime |  |  |  |  |
| AppliedImpactAmount | Applied Impact Amount | currency |  |  | 18 | 2 |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | textarea |  | 1000 |  |  |
| EffectiveDateTime | Effective Date Time | datetime |  |  |  |  |
| Id | Payment Line Invoice Line ID | id |  | 18 |  |  |
| ImpactAmount | Impact Amount | currency |  |  | 18 | 2 |
| InvoiceLineBalance | Invoice Line Balance | currency |  |  | 18 | 2 |
| InvoiceLineId | Invoice Line ID | reference |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LegalEntityAccountingPeriodId | Legal Entity Accounting Period ID | reference |  | 18 |  |  |
| LegalEntityId | Legal Entity ID | reference |  | 18 |  |  |
| PaymentBalance | Payment Balance | currency |  |  | 18 | 2 |
| PaymentId | Payment ID | reference |  | 18 |  |  |
| PaymentLineInvoiceLineNumber | Name | string |  | 255 |  |  |
| RelatedPaymentLineInvcLineId | Payment Line Invoice Line ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Type | Type | picklist |  | 255 |  |  |
| UnappliedDateTime | Unapplied Date Time | datetime |  |  |  |  |
| UnappliedStatus | Unapplied Status | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
