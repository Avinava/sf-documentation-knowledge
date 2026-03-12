---
title: "OrderDeliveryGroupSummary"
domain: sfFieldRef
topic: orderdeliverygroupsummary
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:05.703Z
estimatedTokens: 916
keywords: [OrderDeliveryGroupSummary, current, state, group, OrderItemSummaries, belonging, OrderSummary, fulfilled, delivery, delivered, address, shipment, include, isn’t, guaranteed]
---

# OrderDeliveryGroupSummary

> Represents the current properties and state of a group of OrderItemSummaries,
      belonging to one OrderSummary, to be fulfilled using the same delivery method and delivered to
      the same address. A single shipment can include them all, but that isn’t guaranteed.
      Corresponds to one or more order delivery group objects, consisting of an original object and
      any change objects applicable to it.

# OrderDeliveryGroupSummary

Represents the current properties and state of a group of OrderItemSummaries, belonging to one OrderSummary, to be fulfilled using the same delivery method and delivered to the same address. A single shipment can include them all, but that isn’t guaranteed. Corresponds to one or more order delivery group objects, consisting of an original object and any change objects applicable to it.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [OrderDeliveryGroupSummary](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_orderdeliverygroupsummary.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| DeliverToAddress | Shipping Address | address |  |  |  |  |
| DeliverToCity | City | string |  | 40 |  |  |
| DeliverToCompanyName | Deliver to Company Name | string |  | 255 |  |  |
| DeliverToCountry | Country | string |  | 80 |  |  |
| DeliverToFullFirstName | First Name | string |  | 40 |  |  |
| DeliverToFullLastName | Last Name | string |  | 80 |  |  |
| DeliverToFullName | Deliver to Full Name | string |  | 121 |  |  |
| DeliverToFullSalutation | Salutation | picklist |  | 40 |  |  |
| DeliverToGeocodeAccuracy | Geocode Accuracy | picklist |  | 255 |  |  |
| DeliverToLatitude | Latitude | double |  |  | 18 | 15 |
| DeliverToLongitude | Longitude | double |  |  | 18 | 15 |
| DeliverToName | Name | string |  | 255 |  |  |
| DeliverToPostalCode | Zip | string |  | 20 |  |  |
| DeliverToState | State/Province | string |  | 80 |  |  |
| DeliverToStreet | Address | textarea |  | 255 |  |  |
| DeliveryInstructions | Delivery Instructions | textarea |  | 2000 |  |  |
| Description | Description | textarea |  | 2000 |  |  |
| DesiredDeliveryDate | Desired Delivery Date | datetime |  |  |  |  |
| EmailAddress | Email Address | email |  | 80 |  |  |
| GiftMessage | Gift Message | textarea |  | 2000 |  |  |
| GrandTotalAmount | Total with Tax | currency |  |  | 18 | 2 |
| Id | Order Delivery Group Summary ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsGift | Is Gift | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| OrderDeliveryGroupSummaryNumber | Name | string |  | 255 |  |  |
| OrderDeliveryMethodId | Order Delivery Method ID | reference |  | 18 |  |  |
| OrderSummaryId | Order Summary ID | reference |  | 18 |  |  |
| OriginalOrderDeliveryGroupId | Order Delivery Group ID | reference |  | 18 |  |  |
| PhoneNumber | Phone Number | phone |  | 40 |  |  |
| PromisedDeliveryDate | Promised Delivery Date | datetime |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotalAdjustmentAmount | Adjustments | currency |  |  | 18 | 2 |
| TotalAdjustmentAmtWithTax | Adjustments with Tax | currency |  |  | 18 | 2 |
| TotalAdjustmentTaxAmount | Adjustments Tax | currency |  |  | 18 | 2 |
| TotalAmount | Pretax Total | currency |  |  | 18 | 2 |
| TotalLineAmount | Subtotal | currency |  |  | 18 | 2 |
| TotalLineAmtWithTax | Subtotal with Tax | currency |  |  | 18 | 2 |
| TotalLineTaxAmount | Subtotal Tax | currency |  |  | 18 | 2 |
| TotalTaxAmount | Tax | currency |  |  | 18 | 2 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
