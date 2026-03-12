---
title: "ReturnOrder"
domain: sfFieldRef
topic: returnorder
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:12.647Z
estimatedTokens: 1165
keywords: [ReturnOrder, repair, inventory, products, Service, order, Management, API, version, 42.0, later]
---

# ReturnOrder

> Represents the return or repair of inventory or products in Field
			Service, or the return of order products in Order Management. This object is
		available in API version 42.0 and later.

# ReturnOrder

Represents the return or repair of inventory or products in Field Service, or the return of order products in Order Management. This object is available in API version 42.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ReturnOrder](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_returnorder.htm "HTML (New Window)") in the Field Service Developer Guide, Manufacturing Cloud Developer Guide, and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| CaseId | Case ID | reference |  | 18 |  |  |
| ContactId | Contact ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | textarea |  | 32000 |  |  |
| DestinationLocationId | Destination Location ID | reference |  | 18 |  |  |
| ExpectedArrivalDate | Expected Arrival Date | datetime |  |  |  |  |
| ExpirationDate | Expiration Date | datetime |  |  |  |  |
| GrandTotalAmount | Total with Tax | currency |  |  | 18 | 2 |
| Id | Return Order ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LifeCycleType | Life Cycle Type | picklist |  | 255 |  |  |
| OrderId | Order ID | reference |  | 18 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ProductRequestId | Product Request ID | reference |  | 18 |  |  |
| ProductServiceCampaignId | Product Service Campaign ID | reference |  | 18 |  |  |
| RefundInstructionsHint | Refund Instructions Hint | textarea |  | 131072 |  |  |
| ReturnOrderNumber | Return Order Number | string |  | 255 |  |  |
| ReturnedById | Returned By ID | reference |  | 18 |  |  |
| ShipFromAddress | Ship From Address | address |  |  |  |  |
| ShipFromCity | City | string |  | 40 |  |  |
| ShipFromCountry | Country | string |  | 80 |  |  |
| ShipFromGeocodeAccuracy | Geocode Accuracy | picklist |  | 40 |  |  |
| ShipFromLatitude | Latitude | double |  |  | 18 | 15 |
| ShipFromLongitude | Longitude | double |  |  | 18 | 15 |
| ShipFromPostalCode | Zip/Postal Code | string |  | 20 |  |  |
| ShipFromState | State/Province | string |  | 80 |  |  |
| ShipFromStreet | Address | textarea |  | 255 |  |  |
| ShipmentType | Shipment Type | picklist |  | 40 |  |  |
| SourceLocationId | Source Location ID | reference |  | 18 |  |  |
| Status | Status | picklist |  | 40 |  |  |
| StatusCategory | Status Category | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TaxLocaleType | Tax Locale Type | picklist |  | 255 |  |  |
| TotalAmount | Pretax Total | currency |  |  | 18 | 2 |
| TotalDeliveryAdjustAmount | Shipping Adjustments | currency |  |  | 18 | 2 |
| TotalDeliveryAdjustAmtWithTax | Shipping Adjustments with Tax | currency |  |  | 18 | 2 |
| TotalDeliveryAdjustTaxAmount | Shipping Adjustments Tax | currency |  |  | 18 | 2 |
| TotalDeliveryAmount | Shipping Subtotal | currency |  |  | 18 | 2 |
| TotalDeliveryAmtWithTax | Shipping Subtotal with Tax | currency |  |  | 18 | 2 |
| TotalDeliveryTaxAmount | Shipping Subtotal Tax | currency |  |  | 18 | 2 |
| TotalFeeAdjustAmount | Fee Adjustments | currency |  |  | 18 | 2 |
| TotalFeeAdjustAmtWithTax | Fee Adjustments with Tax | currency |  |  | 18 | 2 |
| TotalFeeAdjustTaxAmount | Fee Adjustments Tax | currency |  |  | 18 | 2 |
| TotalFeeAmount | Fee Subtotal | currency |  |  | 18 | 2 |
| TotalFeeAmtWithTax | Fee Subtotal with Tax | currency |  |  | 18 | 2 |
| TotalFeeTaxAmount | Fee Subtotal Tax | currency |  |  | 18 | 2 |
| TotalProductAdjustAmount | Product Adjustments | currency |  |  | 18 | 2 |
| TotalProductAdjustAmtWithTax | Product Adjustments with Tax | currency |  |  | 18 | 2 |
| TotalProductAdjustTaxAmount | Product Adjustments Tax | currency |  |  | 18 | 2 |
| TotalProductAmount | Product Subtotal | currency |  |  | 18 | 2 |
| TotalProductAmtWithTax | Product Subtotal with Tax | currency |  |  | 18 | 2 |
| TotalProductTaxAmount | Product Subtotal Tax | currency |  |  | 18 | 2 |
| TotalTaxAmount | Tax | currency |  |  | 18 | 2 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
