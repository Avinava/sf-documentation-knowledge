---
title: "MerchantAccount"
domain: sfFieldRef
topic: merchantaccount
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:04.148Z
estimatedTokens: 473
keywords: [MerchantAccount, bank, account, lets, merchant, accept, payments, variety, payment, including, credit, debit, cards, digital, wallets]
---

# MerchantAccount

> A type of bank  account that lets a merchant accept payments from a
         variety of payment methods, including credit or debit cards, or digital wallets. A
         Salesforce Payments merchant account is linked to an underlying payment gateway to process
         payments This object is available in API version 56.0 and later.

# MerchantAccount

A type of bank account that lets a merchant accept payments from a variety of payment methods, including credit or debit cards, or digital wallets. A Salesforce Payments merchant account is linked to an underlying payment gateway to process payments This object is available in API version 56.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [MerchantAccount](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_merchantaccount.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountDescription | Description | textarea |  | 32000 |  |  |
| CountryIsoCode | Country | string |  | 2 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| DefaultTapToPayLocation | Tap To Pay Location | string |  | 40 |  |  |
| Id | Merchant Account ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Mode | Mode | picklist |  | 255 |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PaymentStatus | Payment Status | picklist |  | 255 |  |  |
| PayoutStatus | Payout Status | picklist |  | 255 |  |  |
| Status | Account Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
