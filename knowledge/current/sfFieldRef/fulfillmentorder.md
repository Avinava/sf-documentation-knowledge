---
title: "FulfillmentOrder"
domain: sfFieldRef
topic: fulfillmentorder
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:58.755Z
estimatedTokens: 1215
keywords: [FulfillmentOrder, group, products, fees, delivery, charges, order, share, fulfillment, location, recipient, FulfillmentOrderLineItems, belonging, associated, OrderItemSummary]
---

# FulfillmentOrder

> Represents a group of products, fees, and delivery charges on a single
			order that share the same fulfillment location, delivery method, and recipient. The
			FulfillmentOrderLineItems belonging to a FulfillmentOrder are associated with
			OrderItemSummary objects belonging to a single OrderSummary. This object is
		available in API version 48.0 and later.

# FulfillmentOrder

Represents a group of products, fees, and delivery charges on a single order that share the same fulfillment location, delivery method, and recipient. The FulfillmentOrderLineItems belonging to a FulfillmentOrder are associated with OrderItemSummary objects belonging to a single OrderSummary. This object is available in API version 48.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [FulfillmentOrder](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_fulfillmentorder.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| ActivatedDate | Activated Date | datetime |  |  |  |  |
| BillToContactId | Contact ID | reference |  | 18 |  |  |
| ClosedDate | Closed Date | datetime |  |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DeliveryDate | Delivery Date | datetime |  |  |  |  |
| FulfilledFromLocationId | Fulfilled From Location ID | reference |  | 18 |  |  |
| FulfilledToAddress | Fulfilled To Address | address |  |  |  |  |
| FulfilledToCity | City | string |  | 40 |  |  |
| FulfilledToCountry | Country | string |  | 80 |  |  |
| FulfilledToEmailAddress | Fulfilled To Email Address | email |  | 80 |  |  |
| FulfilledToGeocodeAccuracy | Fulfilled To Geocode Accuracy | picklist |  | 40 |  |  |
| FulfilledToLatitude | Latitude | double |  |  | 18 | 15 |
| FulfilledToLongitude | Longitude | double |  |  | 18 | 15 |
| FulfilledToName | Order Recipient | string |  | 255 |  |  |
| FulfilledToPhone | Fulfilled To Phone | phone |  | 40 |  |  |
| FulfilledToPostalCode | Zip | string |  | 20 |  |  |
| FulfilledToState | State/Province | string |  | 80 |  |  |
| FulfilledToStreet | Address | textarea |  | 255 |  |  |
| FulfillmentOrderNumber | Fulfillment Order Number | string |  | 255 |  |  |
| GrandTotalAmount | Total with Tax | currency |  |  | 18 | 2 |
| Id | Fulfillment Order ID | id |  | 18 |  |  |
| InvoiceId | Invoice ID | reference |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsReship | Reship | boolean |  |  |  |  |
| IsSuspended | Is Suspended | boolean |  |  |  |  |
| ItemCount | Total Quantity | double |  |  | 18 | 0 |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| OrderId | Order ID | reference |  | 18 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ProcessingTimeInMinutes | Processing Time In Minutes | long | 18 |  |  |  |
| StartFulfillmentDate | Start Fulfillment Date | datetime |  |  |  |  |
| Status | Status | picklist |  | 40 |  |  |
| StatusCategory | Status Category | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TaxLocaleType | Tax Locale Type | picklist |  | 255 |  |  |
| TotalAdjustmentAmount | Product Adjustments | currency |  |  | 18 | 2 |
| TotalAdjustmentAmtWithTax | Product Adjustments with Tax | currency |  |  | 18 | 2 |
| TotalAdjustmentTaxAmount | Product Adjustments Tax | currency |  |  | 18 | 2 |
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
| TotalProductAmount | Product Subtotal | currency |  |  | 18 | 2 |
| TotalProductAmtWithTax | Product Subtotal with Tax | currency |  |  | 18 | 2 |
| TotalProductTaxAmount | Product Subtotal Tax | currency |  |  | 18 | 2 |
| TotalTaxAmount | Tax | currency |  |  | 18 | 2 |
| Type | Type | picklist |  | 40 |  |  |
| TypeCategory | Type Category | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
