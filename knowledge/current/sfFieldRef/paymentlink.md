---
title: "PaymentLink"
domain: sfFieldRef
topic: paymentlink
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:07.315Z
estimatedTokens: 523
keywords: [PaymentLink, payment, link, merchant, embed, Salesforce, app, directs, payers, Pay, Now, what’s, paid, currency, lets]
---

# PaymentLink

> A payment link that a merchant can embed into a Salesforce app. The link
         directs payers to a Pay Now page that shows what’s being paid for, in the payers currency,
         and lets payers enter their payment data.

# PaymentLink

A payment link that a merchant can embed into a Salesforce app. The link directs payers to a Pay Now page that shows what’s being paid for, in the payers currency, and lets payers enter their payment data.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [PaymentLink](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_paymentlink.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| Amount | Amount | currency |  |  | 18 | 0 |
| CartId | Cart ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | string |  | 255 |  |  |
| ExpiryTime | Expiration | datetime |  |  |  |  |
| Id | Payment Link ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PaymentLinkNumber | Payment Link Number | string |  | 255 |  |  |
| PaymentMethodSetId | Merchant Account Payment Method Set ID | reference |  | 18 |  |  |
| PaymentUrl | Payment URL | url |  | 255 |  |  |
| QrCodeImageId | ContentVersion ID | reference |  | 18 |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TaxAmount | Tax Amount | currency |  |  | 18 | 0 |
| Title | Title | string |  | 80 |  |  |
| Type | Type | picklist |  | 255 |  |  |
| UsageType | Usage Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
