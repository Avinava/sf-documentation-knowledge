---
title: "PaymentLineInvoice"
domain: sfFieldRef
topic: paymentlineinvoice
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:07.296Z
estimatedTokens: 544
keywords: [PaymentLineInvoice, payment, allocated, unallocated, invoice, API, version, 48.0, later]
---

# PaymentLineInvoice

> Represents a payment allocated to or unallocated from an invoice. This
    object is available in API version 48.0 and later.

# PaymentLineInvoice

Represents a payment allocated to or unallocated from an invoice. This object is available in API version 48.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [PaymentLineInvoice](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_paymentlineinvoice.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Amount | Amount | currency |  |  | 18 | 2 |
| AppliedDate | Applied Date | datetime |  |  |  |  |
| AssociatedAccountId | Account ID | reference |  | 18 |  |  |
| AssociatedPaymentLineId | Payment Line Invoice ID | reference |  | 18 |  |  |
| Comments | Comments | textarea |  | 1000 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Date | Date | datetime |  |  |  |  |
| EffectiveDate | Effective Date | datetime |  |  |  |  |
| EffectiveImpactAmount | Effective Impact Amount | currency |  |  | 18 | 2 |
| HasBeenUnapplied | Has Been Unapplied | picklist |  | 255 |  |  |
| Id | Payment Line Invoice ID | id |  | 18 |  |  |
| ImpactAmount | Impact Amount | currency |  |  | 18 | 2 |
| InvoiceId | Invoice ID | reference |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| PaymentBalance | Payment Balance | currency |  |  | 18 | 2 |
| PaymentId | Payment ID | reference |  | 18 |  |  |
| PaymentLineInvoiceNumber | Payment Line Invoice Number | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Type | Type | picklist |  | 255 |  |  |
| UnappliedDate | Unapplied Date | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
