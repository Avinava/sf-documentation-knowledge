---
title: "RefundLinePayment"
domain: sfFieldRef
topic: refundlinepayment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:11.975Z
estimatedTokens: 522
keywords: [RefundLinePayment, refund, line, applied, payment, API, version, 48.0, later]
---

# RefundLinePayment

> A refund line that has been applied to a payment. This object is available
    in API version 48.0 and later.

# RefundLinePayment

A refund line that has been applied to a payment. This object is available in API version 48.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [RefundLinePayment](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_refundlinepayment.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Amount | Amount | currency |  |  | 18 | 2 |
| AppliedDate | Applied Date | datetime |  |  |  |  |
| AssociatedAccountId | Account ID | reference |  | 18 |  |  |
| AssociatedRefundLinePaymentId | Refund Line Payment ID | reference |  | 18 |  |  |
| Comments | Comments | textarea |  | 1000 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Date | Date | datetime |  |  |  |  |
| EffectiveDate | Effective Date | datetime |  |  |  |  |
| EffectiveImpactAmount | Effective Impact Amount | currency |  |  | 18 | 2 |
| HasBeenUnapplied | Has Been Unapplied | picklist |  | 255 |  |  |
| Id | Refund Line Payment ID | id |  | 18 |  |  |
| ImpactAmount | Impact Amount | currency |  |  | 18 | 2 |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| PaymentBalance | Payment Balance | currency |  |  | 18 | 2 |
| PaymentId | Payment ID | reference |  | 18 |  |  |
| RefundBalance | Refund Balance | currency |  |  | 18 | 2 |
| RefundId | Refund ID | reference |  | 18 |  |  |
| RefundLinePaymentNumber | Refund Line Payment Number | string |  | 255 |  |  |
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
