---
title: "ReturnOrderLineItem"
domain: sfFieldRef
topic: returnorderlineitem
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:12.685Z
estimatedTokens: 955
keywords: [ReturnOrderLineItem, specific, product, repaired, part, order, service, item, Management, API, version, 42.0, later]
---

# ReturnOrderLineItem

> Represents a specific product that is returned or repaired as part of
			a return order in Field service, or a specific order item that is returned as part of a
			return order in Order Management. This object is available in API version 42.0 and
		later.

# ReturnOrderLineItem

Represents a specific product that is returned or repaired as part of a return order in Field service, or a specific order item that is returned as part of a return order in Order Management. This object is available in API version 42.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ReturnOrderLineItem](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_returnorderlineitem.htm "HTML (New Window)") in the Field Service Developer Guide, Manufacturing Cloud Developer Guide, and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AssetId | Asset ID | reference |  | 18 |  |  |
| ChangeOrderItemId | Order Product ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | textarea |  | 32000 |  |  |
| DestinationLocationId | Destination Location ID | reference |  | 18 |  |  |
| GrossUnitPrice | Gross Unit Price | currency |  |  | 18 | 2 |
| Id | Return Order Line Item ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| OrderItemId | Order Product ID | reference |  | 18 |  |  |
| ProcessingPlan | Processing Plan | picklist |  | 40 |  |  |
| Product2Id | Product ID | reference |  | 18 |  |  |
| ProductItemId | Product Item ID | reference |  | 18 |  |  |
| ProductRequestLineItemId | Product Request Line Item ID | reference |  | 18 |  |  |
| ProductServiceCampaignId | Product Service Campaign ID | reference |  | 18 |  |  |
| ProductServiceCampaignItemId | Product Service Campaign Item ID | reference |  | 18 |  |  |
| QuantityExpected | Quantity Expected | double |  |  | 18 | 0 |
| QuantityReceived | Quantity Received | double |  |  | 18 | 0 |
| QuantityRejected | Quantity Rejected | double |  |  | 18 | 0 |
| QuantityReturned | Quantity Returned | double |  |  | 18 | 2 |
| QuantityUnitOfMeasure | Quantity Unit Of Measure | picklist |  | 40 |  |  |
| ReasonForChangeText | Reason for Change Text | string |  | 255 |  |  |
| ReasonForRejection | Reason for Rejection | picklist |  | 40 |  |  |
| ReasonForReturn | Reason For Return | picklist |  | 40 |  |  |
| RepaymentMethod | Repayment Method | picklist |  | 40 |  |  |
| ReturnOrderId | Return Order ID | reference |  | 18 |  |  |
| ReturnOrderLineItemNumber | Return Order Line Item Number | string |  | 255 |  |  |
| SourceLocationId | Source Location ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotalAdjustmentAmount | Adjustments | currency |  |  | 18 | 2 |
| TotalAdjustmentAmountWithTax | Adjustments with Tax | currency |  |  | 18 | 2 |
| TotalAdjustmentTaxAmount | Adjustments Tax | currency |  |  | 18 | 2 |
| TotalAmount | Total with Tax | currency |  |  | 18 | 2 |
| TotalLineAmount | Line Subtotal | currency |  |  | 18 | 2 |
| TotalLineAmountWithTax | Line Subtotal with Tax | currency |  |  | 18 | 2 |
| TotalLineTaxAmount | Line Subtotal Tax | currency |  |  | 18 | 2 |
| TotalPrice | Pretax Total | currency |  |  | 18 | 2 |
| TotalTaxAmount | Tax | currency |  |  | 18 | 2 |
| Type | Type | picklist |  | 40 |  |  |
| TypeCode | Type Code | picklist |  | 255 |  |  |
| UnitPrice | Unit Price | currency |  |  | 18 | 2 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
