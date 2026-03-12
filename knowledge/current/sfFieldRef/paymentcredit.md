---
title: "PaymentCredit"
domain: sfFieldRef
topic: paymentcredit
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:07.215Z
estimatedTokens: 569
keywords: [PaymentCredit, Tracks, amount, money, customer, store, credit, gift, card, another, It's, linked, original, payment, record]
---

# PaymentCredit

> Tracks the amount of money returned to the customer. The return can be a
         store credit, a gift card, or another type of credit. It's linked to the original payment
         record and includes the total credit amount issued. This object is available in API
      version 65.0 and later.

# PaymentCredit

Tracks the amount of money returned to the customer. The return can be a store credit, a gift card, or another type of credit. It's linked to the original payment record and includes the total credit amount issued. This object is available in API version 65.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [PaymentCredit](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_paymentcredit.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| Amount | Amount | currency |  |  | 18 | 2 |
| Balance | Balance | currency |  |  | 18 | 2 |
| Comments | Comments | textarea |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CreditMemoId | Credit Memo ID | reference |  | 18 |  |  |
| CreditType | Credit Type | picklist |  | 40 |  |  |
| CreditTypeCategory | Credit Type Category | picklist |  | 255 |  |  |
| EffectiveDate | Effective Date | datetime |  |  |  |  |
| Id | Payment Credit ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| NetApplied | Net Applied | currency |  |  | 18 | 2 |
| PaymentCreditNumber | Payment Credit Number | string |  | 255 |  |  |
| PaymentId | Payment ID | reference |  | 18 |  |  |
| ReturnOrderId | Return Order ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotalApplied | Total Applied | currency |  |  | 18 | 2 |
| TotalCreditPendingTxnAmt | Total Credit Pending Transaction Amount | currency |  |  | 18 | 2 |
| TotalCreditTxnAmt | Total Credit Transaction Amount | currency |  |  | 18 | 2 |
| TotalUnapplied | Total Unapplied | currency |  |  | 18 | 2 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
