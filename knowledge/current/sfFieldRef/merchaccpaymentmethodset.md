---
title: "MerchAccPaymentMethodSet"
domain: sfFieldRef
topic: merchaccpaymentmethodset
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:04.125Z
estimatedTokens: 386
keywords: [MerchAccPaymentMethodSet, Payment, admins, configure, ordered, buyer, checkout, admin, multiple, MerchAccPaymentMethodSets, designated, specific, locale, region, sale]
---

# MerchAccPaymentMethodSet

> Allows Payment admins to configure an ordered list of payment methods that
         are available to a buyer during checkout. A payment admin can configure multiple
         MerchAccPaymentMethodSets
         each
         designated for a specific locale, payment region, or sale channel.

# MerchAccPaymentMethodSet

Allows Payment admins to configure an ordered list of payment methods that are available to a buyer during checkout. A payment admin can configure multiple MerchAccPaymentMethodSets each designated for a specific locale, payment region, or sale channel.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [MerchAccPaymentMethodSet](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_merchaccpaymentmethodset.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| DeveloperName | Payment Method Set Key | string |  | 80 |  |  |
| Id | Merchant Account Payment Method Set ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MerchantAccountId | Merchant Account ID | reference |  | 18 |  |  |
| PaymentMethodSetNumber | Payment Method Set Number | string |  | 255 |  |  |
| PaymentMethodSummary | Payment Methods | string |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
