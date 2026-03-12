---
title: "OrderDeliveryGroup"
domain: sfFieldRef
topic: orderdeliverygroup
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:05.678Z
estimatedTokens: 877
keywords: [OrderDeliveryGroup, group, order, items, share, delivery, address, fulfillment, process, shipping, gift, downloading, picking, store, standard]
---

# OrderDeliveryGroup

> A group of order items that share a delivery method and address. The delivery
      method and address are used during the fulfillment process, such as shipping as a gift,
      downloading, picking up in store, or shipping to a standard address This object is
    available in API version 48.0 and later.

# OrderDeliveryGroup

A group of order items that share a delivery method and address. The delivery method and address are used during the fulfillment process, such as shipping as a gift, downloading, picking up in store, or shipping to a standard address This object is available in API version 48.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [OrderDeliveryGroup](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_orderdeliverygroup.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DeliverToAddress | Deliver to Address | address |  |  |  |  |
| DeliverToCity | City | string |  | 40 |  |  |
| DeliverToCompanyName | Deliver to Company Name | string |  | 255 |  |  |
| DeliverToCountry | Country | string |  | 80 |  |  |
| DeliverToFullFirstName | First Name | string |  | 40 |  |  |
| DeliverToFullLastName | Last Name | string |  | 80 |  |  |
| DeliverToFullName | Deliver to Full Name | string |  | 121 |  |  |
| DeliverToFullSalutation | Salutation | picklist |  | 40 |  |  |
| DeliverToGeocodeAccuracy | Geocode Accuracy | picklist |  | 40 |  |  |
| DeliverToLatitude | Latitude | double |  |  | 18 | 15 |
| DeliverToLongitude | Longitude | double |  |  | 18 | 15 |
| DeliverToName | Deliver to Name | string |  | 255 |  |  |
| DeliverToPostalCode | Zip | string |  | 20 |  |  |
| DeliverToState | State/Province | string |  | 80 |  |  |
| DeliverToStreet | Street | textarea |  | 255 |  |  |
| DeliveryInstructions | Delivery Instructions | textarea |  | 2000 |  |  |
| Description | Description | textarea |  | 2000 |  |  |
| DesiredDeliveryDate | Desired Delivery Date | date |  |  |  |  |
| EmailAddress | Email Address | email |  | 80 |  |  |
| GiftMessage | Gift Message | textarea |  | 2000 |  |  |
| GrandTotalAmount | Total with Tax | currency |  |  | 18 | 2 |
| Id | Order Delivery Group ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsGift | Is Gift | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| OrderDeliveryGroupNumber | Order Delivery Group Number | string |  | 255 |  |  |
| OrderDeliveryMethodId | Order Delivery Method ID | reference |  | 18 |  |  |
| OrderId | Order ID | reference |  | 18 |  |  |
| PhoneNumber | Phone Number | phone |  | 40 |  |  |
| PromisedDeliveryDate | Promised Delivery Date | date |  |  |  |  |
| RelatedDeliveryGroupId | Order Delivery Group ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotalAdjustmentAmount | Total Adjustment | currency |  |  | 18 | 2 |
| TotalAdjustmentAmtWithTax | Total Adjustment with Tax | currency |  |  | 18 | 2 |
| TotalAdjustmentTaxAmount | Total Adjustments Tax | currency |  |  | 18 | 2 |
| TotalAmount | Pretax Total | currency |  |  | 18 | 2 |
| TotalLineAmount | Delivery Subtotal | currency |  |  | 18 | 2 |
| TotalLineAmtWithTax | Delivery Subtotal with Tax | currency |  |  | 18 | 2 |
| TotalLineTaxAmount | Delivery Tax | currency |  |  | 18 | 2 |
| TotalTaxAmount | Total Tax | currency |  |  | 18 | 2 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
