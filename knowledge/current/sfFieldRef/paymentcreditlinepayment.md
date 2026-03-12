---
title: "PaymentCreditLinePayment"
domain: sfFieldRef
topic: paymentcreditlinepayment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:07.223Z
estimatedTokens: 458
keywords: [PaymentCreditLinePayment, payment, credit, line, API, version, 65.0, later]
---

# PaymentCreditLinePayment

> A payment credit line payment. This object is available in API version
      65.0 and later.

# PaymentCreditLinePayment

A payment credit line payment. This object is available in API version 65.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [PaymentCreditLinePayment](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_paymentcreditlinepayment.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Amount | Amount | currency |  |  | 18 | 2 |
| AppliedDate | Applied Date | datetime |  |  |  |  |
| AssociatedAccountId | Account ID | reference |  | 18 |  |  |
| AssociatedLineId | Payment Credit Line Payment ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | string |  | 255 |  |  |
| HasBeenUnapplied | Has Been Unapplied | boolean |  |  |  |  |
| Id | Payment Credit Line Payment ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| PaymentCreditId | Payment Credit ID | reference |  | 18 |  |  |
| PaymentCreditLinePaymentNumber | Payment Credit Line Payment Number | string |  | 255 |  |  |
| PaymentId | Payment ID | reference |  | 18 |  |  |
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
