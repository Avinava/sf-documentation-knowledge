---
title: "CartDeliveryGroup"
domain: sfFieldRef
topic: cartdeliverygroup
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:52.546Z
estimatedTokens: 813
keywords: [CartDeliveryGroup, shipping, delivery, items, order, against, store, built, B2B, Commerce, D2C, API, version, 49.0, later]
---

# CartDeliveryGroup

> Represents shipping information for the delivery of items in an order
			against a store built with B2B Commerce or D2C Commerce. This object is available
		in API version 49.0 and later.

# CartDeliveryGroup

Represents shipping information for the delivery of items in an order against a store built with B2B Commerce or D2C Commerce. This object is available in API version 49.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [CartDeliveryGroup](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_cartdeliverygroup.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CartId | Cart ID | reference |  | 18 |  |  |
| CompanyName | Name of the company | string |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DeliverToAddress | Delivery Address | address |  |  |  |  |
| DeliverToCity | City | string |  | 40 |  |  |
| DeliverToCountry | Country | string |  | 80 |  |  |
| DeliverToFirstName | Deliver To First Name | string |  | 255 |  |  |
| DeliverToGeocodeAccuracy | Geocode Accuracy | picklist |  | 40 |  |  |
| DeliverToLastName | Deliver To Last Name | string |  | 255 |  |  |
| DeliverToLatitude | Latitude | double |  |  | 18 | 15 |
| DeliverToLongitude | Longitude | double |  |  | 18 | 15 |
| DeliverToName | Deliver To Name | string |  | 255 |  |  |
| DeliverToPostalCode | Zip | string |  | 20 |  |  |
| DeliverToState | State/Province | string |  | 80 |  |  |
| DeliverToStreet | Street | textarea |  | 255 |  |  |
| DesiredDeliveryDate | Desired Delivery Date | datetime |  |  |  |  |
| GiftMessage | Gift message | textarea |  | 2000 |  |  |
| GiftToName | Gift recipient name | string |  | 255 |  |  |
| GrandTotalAmount | Grand Total Amount | currency |  |  | 18 | 2 |
| Id | Cart Delivery Group ID | id |  | 18 |  |  |
| IsDefault | Is Default | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsGift | Is this is a gift? | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| Name | Cart Delivery Group Name | string |  | 255 |  |  |
| SelectedDeliveryMethodId | Cart Delivery Group Method ID | reference |  | 18 |  |  |
| ShipToPhoneNumber | Phone number given in shipping address | phone |  | 40 |  |  |
| ShippingInstructions | Shipping Instructions | textarea |  | 2000 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotalAdjustmentAmount | Total Adjustment Amount | currency |  |  | 18 | 2 |
| TotalAdjustmentTaxAmount | Total Adjustment Tax Amount | currency |  |  | 18 | 2 |
| TotalAmount | Total Amount | currency |  |  | 18 | 2 |
| TotalCartItemCount | Total Cart Items in Delivery Group | int | 9 |  |  |  |
| TotalChargeAmount | Total Charge Amount | currency |  |  | 18 | 2 |
| TotalChargeTaxAmount | Total Charge Tax Amount | currency |  |  | 18 | 2 |
| TotalProductAmount | Total Product Amount | currency |  |  | 18 | 2 |
| TotalProductTaxAmount | Total Product Tax Amount | currency |  |  | 18 | 2 |
| TotalTaxAmount | Total Tax Amount | currency |  |  | 18 | 2 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
