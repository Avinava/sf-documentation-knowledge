---
title: "SavedPaymentMethod"
domain: sfFieldRef
topic: savedpaymentmethod
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:12.931Z
estimatedTokens: 813
keywords: [SavedPaymentMethod, payment, saved, authenticated, customer, API, version, 58.0, later]
---

# SavedPaymentMethod

> Represents a payment method saved by an authenticated customer. This
      object is available in API version 58.0 and later

# SavedPaymentMethod

Represents a payment method saved by an authenticated customer. This object is available in API version 58.0 and later

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [SavedPaymentMethod](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_savedpaymentmethod.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountHolderEmail | Account Holder Email | string |  | 255 |  |  |
| AccountHolderName | Account Holder Name | string |  | 255 |  |  |
| BankAccountHolderType | Account Ownership Type | picklist |  | 255 |  |  |
| BankAccountType | Bank Account Type | string |  | 25 |  |  |
| BankCode | Bank Code | string |  | 255 |  |  |
| BankName | Bank Name | string |  | 255 |  |  |
| BillingAddress | Billing Address | address |  |  |  |  |
| BillingCity | Bill To City | string |  | 40 |  |  |
| BillingCountry | Bill To Country | string |  | 80 |  |  |
| BillingGeocodeAccuracy | Bill To Geocode Accuracy | picklist |  | 40 |  |  |
| BillingLatitude | Bill To Latitude | double |  |  | 18 | 15 |
| BillingLongitude | Bill To Longitude | double |  |  | 18 | 15 |
| BillingPostalCode | Bill To Zip/Postal Code | string |  | 20 |  |  |
| BillingState | Bill To State/Province | string |  | 80 |  |  |
| BillingStreet | Bill To Street | textarea |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| ExpiryMonth | Expiration Month | int | 9 |  |  |  |
| ExpiryYear | Expiration Year | int | 9 |  |  |  |
| GatewayReference | Gateway Reference | string |  | 255 |  |  |
| GatewayToken | Gateway Token | encryptedstring |  | 175 |  |  |
| Id | Saved Payment Method ID | id |  | 18 |  |  |
| IsDefault | Default | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsMerchantCreated | Saved By Merchant | boolean |  |  |  |  |
| IsSharedWithinSameAccount | Shared within same Account | boolean |  |  |  |  |
| Issuer | Issuer | string |  | 255 |  |  |
| Last4 | Last 4 Characters | string |  | 4 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MerchantAccountId | Merchant Account ID | reference |  | 18 |  |  |
| Name | Saved Payment Method Name | string |  | 255 |  |  |
| Network | Network | string |  | 255 |  |  |
| NickName | Saved Payment Method Nick Name | string |  | 255 |  |  |
| PaymentGatewayId | Payment Gateway ID | reference |  | 18 |  |  |
| ReferenceOwnerId | Reference Owner ID | reference |  | 18 |  |  |
| StandardEntryClassCode | Standard Entry Class Code (ACH) | picklist |  | 255 |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
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
