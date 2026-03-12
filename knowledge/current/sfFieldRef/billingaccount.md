---
title: "BillingAccount"
domain: sfFieldRef
topic: billingaccount
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:49.826Z
estimatedTokens: 1031
keywords: [BillingAccount, customer's, billing, backend, system, maintain, bill, frequency, autopay, API, version, 62.0, later]
---

# BillingAccount

> Represents the customer's billing controls in the backend system. Used to set
         up and maintain details such as bill frequency, bill format, and autopay details. This
      object is available in API version 62.0 and later.

# BillingAccount

Represents the customer's billing controls in the backend system. Used to set up and maintain details such as bill frequency, bill format, and autopay details. This object is available in API version 62.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see BillingAccount in the Energy and Utilities Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| BillCopiesRequested | Bill Copies Requested | int | 9 |  |  |  |
| BillingEmailAddress | Billing Email Address | email |  | 80 |  |  |
| ContactPreferenceType | Contact Preference Type | multipicklist |  | 4099 | 0 |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CreditRating | Credit Rating | string |  | 255 |  |  |
| CreditScore | Credit Score | int | 3 |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| CustomerClass | Customer Class | picklist |  | 40 |  |  |
| ExtlBillCycle | External Bill Cycle | picklist |  | 40 |  |  |
| ExtlBillDeliveryMethod | External Bill Delivery Method | picklist |  | 40 |  |  |
| ExtlBillFormat | External Bill Format | picklist |  | 40 |  |  |
| ExtlBillFrequency | External Bill Frequency | picklist |  | 40 |  |  |
| ExtlReferenceIdentifier | External Reference Identifier | string |  | 120 |  |  |
| ExtlTaxExmpEndDate | External Tax Exemption End | date |  |  |  |  |
| ExtlTaxExmpPercentage | External Tax Exemption Percentage | percent |  |  | 3 | 0 |
| ExtlTaxExmpStartDate | External Tax Exemption Start | date |  |  |  |  |
| ExtlTaxExmpType | External Tax Exemption Type | picklist |  | 40 |  |  |
| ExtlTaxIdentifier | External Tax Identifier | string |  | 255 |  |  |
| Id | Billing Account ID | id |  | 18 |  |  |
| IsAutopayEnabled | Autopay Enabled | boolean |  |  |  |  |
| IsBillingHold | Billing On Hold | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PrimaryBillAddr | Primary Billing Address | address |  |  |  |  |
| PrimaryBillAddrCity | Primary Billing City | string |  | 40 |  |  |
| PrimaryBillAddrCountry | Primary Billing Country | string |  | 80 |  |  |
| PrimaryBillAddrGeocodeAccuracy | Primary Billing Geocode Accuracy | picklist |  | 40 |  |  |
| PrimaryBillAddrLatitude | Primary Billing Latitude | double |  |  | 18 | 15 |
| PrimaryBillAddrLongitude | Primary Billing Longitude | double |  |  | 18 | 15 |
| PrimaryBillAddrPostalCode | Primary Billing Postal Code | string |  | 20 |  |  |
| PrimaryBillAddrState | Primary Billing State | string |  | 80 |  |  |
| PrimaryBillAddrStreet | Primary Billing Street | textarea |  | 255 |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TmpBillingAddr | Temporary Billing Address | address |  |  |  |  |
| TmpBillingAddrCity | Temporary Billing City | string |  | 40 |  |  |
| TmpBillingAddrCountry | Temporary Billing Country | string |  | 80 |  |  |
| TmpBillingAddrEndDate | Temporary Billing Address End Date | date |  |  |  |  |
| TmpBillingAddrGeocodeAccuracy | Temporary Billing Geocode Accuracy | picklist |  | 40 |  |  |
| TmpBillingAddrLatitude | Temporary Billing Latitude | double |  |  | 18 | 15 |
| TmpBillingAddrLongitude | Temporary Billing Longitude | double |  |  | 18 | 15 |
| TmpBillingAddrPostalCode | Temporary Billing Postal Code | string |  | 20 |  |  |
| TmpBillingAddrStartDate | Temporary Billing Address Start Date | date |  |  |  |  |
| TmpBillingAddrState | Temporary Billing State | string |  | 80 |  |  |
| TmpBillingAddrStreet | Temporary Billing Street | textarea |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
