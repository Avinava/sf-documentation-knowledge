---
title: "WebCart"
domain: sfFieldRef
topic: webcart
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:17.108Z
estimatedTokens: 1216
keywords: [WebCart, online, shopping, cart, store, built, B2B, Commerce, D2C, total, amounts, products, shipping, handling, taxes]
---

# WebCart

> Represents an online shopping cart for a store built with B2B
         Commerce or D2C Commerce, with total amounts for products, shipping and handling, and
         taxes. This object is available in API version 49.0 and later.

# WebCart

Represents an online shopping cart for a store built with B2B Commerce or D2C Commerce, with total amounts for products, shipping and handling, and taxes. This object is available in API version 49.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [WebCart](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_webcart.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| BillingAddress | Billing Address | address |  |  |  |  |
| BillingCity | Billing City | string |  | 40 |  |  |
| BillingCountry | Billing Country | string |  | 80 |  |  |
| BillingGeocodeAccuracy | Billing Geocode Accuracy | picklist |  | 40 |  |  |
| BillingLatitude | Billing Latitude | double |  |  | 18 | 15 |
| BillingLongitude | Billing Longitude | double |  |  | 18 | 15 |
| BillingPostalCode | Billing Zip | string |  | 20 |  |  |
| BillingState | Billing State | string |  | 80 |  |  |
| BillingStreet | Billing Street | textarea |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| GrandTotalAmount | Grand Total Amount in Cart | currency |  |  | 18 | 2 |
| GuestCompanyName | Name of the company | string |  | 255 |  |  |
| GuestEmailAddress | Email address for Guest User | email |  | 80 |  |  |
| GuestFirstName | First Name for Guest User | string |  | 255 |  |  |
| GuestLastName | Last Name for Guest User | string |  | 255 |  |  |
| GuestPhoneNumber | Phone Number for Guest User | phone |  | 40 |  |  |
| GuestSecondName | Second Name for Guest User | string |  | 255 |  |  |
| Id | Cart ID | id |  | 18 |  |  |
| InitialOrderReferenceNumber | Initial Order Reference Number | string |  | 36 |  |  |
| InventoryReservationIdentifier | The inventory reservation identifier. | string |  | 255 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsRepricingNeeded | Is Repricing Needed | boolean |  |  |  |  |
| IsSecondary | Is Cart Secondary | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastRepricingDate | Last Repricing Date | datetime |  |  |  |  |
| Name | Cart Name | string |  | 255 |  |  |
| OrderOwnerId | User ID | reference |  | 18 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PaymentGroupId | Payment Group ID | reference |  | 18 |  |  |
| PaymentMethodId | Payment Method ID | reference |  | 18 |  |  |
| PoNumber | Purchase Order Number | string |  | 80 |  |  |
| Status | Status | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TaxType | Tax Policy for Cart | picklist |  | 255 |  |  |
| TotalAdjustmentAmount | Total Quantity Based and Promotional Adjustment Amount in Cart | currency |  |  | 18 | 2 |
| TotalAmount | Total Amount in Cart | currency |  |  | 18 | 2 |
| TotalAmountAfterAllAdjustments | Cart Total Adjusted Price | currency |  |  | 18 | 2 |
| TotalCartLevelAdjAmount | Total cart level adjustment amount for all the items in the cart. Includes discount and surcharge. | currency |  |  | 18 | 2 |
| TotalChargeAmount | Total Charge Amount in Cart | currency |  |  | 18 | 2 |
| TotalChargeItemAdjAmount | Total adjustment amount on a cart item of type charge. Includes discount and surcharge. | currency |  |  | 18 | 2 |
| TotalChargeTaxAmount | Total Charge Tax Amount in Cart | currency |  |  | 18 | 2 |
| TotalLineItemsWithErrors | Total Line Items with Errors | int | 9 |  |  |  |
| TotalListAmount | Total List Amount in Cart | currency |  |  | 18 | 2 |
| TotalProductAmount | Total Product Amount in Cart | currency |  |  | 18 | 2 |
| TotalProductCount | Total Quantity in the Cart | double |  |  | 18 | 0 |
| TotalProductItemAdjAmount | Total adjustment amount on a cart item. Includes discount and surcharge. | currency |  |  | 18 | 2 |
| TotalProductLineItemCount | Total Product Line Item Count | int | 9 |  |  |  |
| TotalProductListAmount | Total Product List Amount in Cart | currency |  |  | 18 | 2 |
| TotalProductTaxAmount | Total Product Tax Amount in Cart | currency |  |  | 18 | 2 |
| TotalPromoAdjustmentAmount | Cart Promotions Adjustment | currency |  |  | 18 | 2 |
| TotalPromoAdjustmentTaxAmount | Cart Promotions Tax Adjustment | currency |  |  | 18 | 2 |
| TotalTaxAmount | Total Tax Amount in Cart | currency |  |  | 18 | 2 |
| Type | Type | picklist |  | 255 |  |  |
| UniqueProductCount | Unique Products (SKUs) in the Cart | int | 9 |  |  |  |
| WebStoreId | Store ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
