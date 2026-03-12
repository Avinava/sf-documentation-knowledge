---
title: "OrderSummary"
domain: sfFieldRef
topic: ordersummary
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:06.053Z
estimatedTokens: 1463
keywords: [OrderSummary, current, state, order, Corresponds, objects, consisting, original, any, change, applicable]
---

# OrderSummary

> Represents the current properties and state of an order. Corresponds to one or
      more order objects, consisting of an original object and any change objects applicable to
      it.

# OrderSummary

Represents the current properties and state of an order. Corresponds to one or more order objects, consisting of an original object and any change objects applicable to it.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [OrderSummary](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_ordersummary.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| ActiveProcessExceptionCount | Active Process Exception Count | int | 9 |  |  |  |
| BillToContactId | Contact ID | reference |  | 18 |  |  |
| BillingAddress | Billing Address | address |  |  |  |  |
| BillingCity | City | string |  | 40 |  |  |
| BillingCountry | Country | string |  | 80 |  |  |
| BillingEmailAddress | Billing Email Address | email |  | 80 |  |  |
| BillingGeocodeAccuracy | Geocode Accuracy | picklist |  | 255 |  |  |
| BillingLatitude | Latitude | double |  |  | 18 | 15 |
| BillingLongitude | Longitude | double |  |  | 18 | 15 |
| BillingPhoneNumber | Billing Phone Number | phone |  | 40 |  |  |
| BillingPostalCode | Zip | string |  | 20 |  |  |
| BillingState | State/Province | string |  | 80 |  |  |
| BillingStreet | Address | textarea |  | 255 |  |  |
| BusinessModel | Business Model | picklist |  | 255 |  |  |
| ChangeOrderId | Change Order ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | textarea |  | 1175 |  |  |
| ExternalReferenceIdentifier | External Reference Identifier | string |  | 80 |  |  |
| GrandTotalAmount | Total | currency |  |  | 18 | 2 |
| Id | Order Summary ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsSuspended | Suspended | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| OrderLifeCycleType | Order Life Cycle Type | picklist |  | 255 |  |  |
| OrderNumber | Order Summary Number | string |  | 255 |  |  |
| OrderProductLineCount | Order Product Line Count | int | 9 |  |  |  |
| OrderedDate | Ordered Date | datetime |  |  |  |  |
| OriginalOrderId | Original Order ID | reference |  | 18 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PoDate | PO Date | datetime |  |  |  |  |
| PoNumber | PO Number | string |  | 80 |  |  |
| Pricebook2Id | Price Book ID | reference |  | 18 |  |  |
| RoutingAttempts | Routing Attempts | int | 9 |  |  |  |
| SalesChannelId | Sales Channel ID | reference |  | 18 |  |  |
| SalesStoreId | Sales Store ID | reference |  | 18 |  |  |
| SourceOrderSummaryId | Order Summary ID | reference |  | 18 |  |  |
| SourceProcess | Source Process | picklist |  | 255 |  |  |
| Status | Status | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TaxLocaleType | Tax Locale Type | picklist |  | 255 |  |  |
| TotalAdjDeliveryAmtWithTax | Shipping with Tax | currency |  |  | 18 | 2 |
| TotalAdjDistAmount | Order Adjustments | currency |  |  | 18 | 2 |
| TotalAdjDistAmountWithTax | Order Adjustments with Tax | currency |  |  | 18 | 2 |
| TotalAdjDistTaxAmount | Order Adjustments Tax | currency |  |  | 18 | 2 |
| TotalAdjFeeAmtWithTax | Fees with Tax | currency |  |  | 18 | 2 |
| TotalAdjProductAmtWithTax | Subtotal with Tax | currency |  |  | 18 | 2 |
| TotalAdjustedDeliveryAmount | Shipping | currency |  |  | 18 | 2 |
| TotalAdjustedDeliveryTaxAmount | Shipping Tax | currency |  |  | 18 | 2 |
| TotalAdjustedFeeAmount | Fees | currency |  |  | 18 | 2 |
| TotalAdjustedFeeTaxAmount | Fees Tax | currency |  |  | 18 | 2 |
| TotalAdjustedProductAmount | Subtotal | currency |  |  | 18 | 2 |
| TotalAdjustedProductTaxAmount | Subtotal Tax | currency |  |  | 18 | 2 |
| TotalAmount | Pretax Subtotal | currency |  |  | 18 | 2 |
| TotalDeliveryAdjDistAmount | Order Shipping Adjustments | currency |  |  | 18 | 2 |
| TotalDeliveryAdjDistAmtWithTax | Order Shipping Adjustments with Tax | currency |  |  | 18 | 2 |
| TotalDeliveryAdjDistTaxAmount | Order Shipping Adjustments Tax | currency |  |  | 18 | 2 |
| TotalDeliveryAmount | Shipping Subtotal | currency |  |  | 18 | 2 |
| TotalDeliveryAmountWithTax | Shipping Subtotal With Tax | currency |  |  | 18 | 2 |
| TotalDeliveryTaxAmount | Shipping Subtotal Tax | currency |  |  | 18 | 2 |
| TotalFeeAdjDistAmount | Order Fee Adjustments | currency |  |  | 18 | 2 |
| TotalFeeAdjDistAmtWithTax | Order Fee Adjustments with Tax | currency |  |  | 18 | 2 |
| TotalFeeAdjDistTaxAmount | Order Fee Adjustments Tax | currency |  |  | 18 | 2 |
| TotalFeeAmount | Fee Subtotal | currency |  |  | 18 | 2 |
| TotalFeeAmountWithTax | Fee Subtotal With Tax | currency |  |  | 18 | 2 |
| TotalFeeTaxAmount | Fee Subtotal Tax | currency |  |  | 18 | 2 |
| TotalProductAdjDistAmount | Order Product Adjustments | currency |  |  | 18 | 2 |
| TotalProductAdjDistAmtWithTax | Order Product Adjustments with Tax | currency |  |  | 18 | 2 |
| TotalProductAdjDistTaxAmount | Order Product Adjustments Tax | currency |  |  | 18 | 2 |
| TotalProductAmount | Product Subtotal | currency |  |  | 18 | 2 |
| TotalProductAmountWithTax | Product Subtotal With Tax | currency |  |  | 18 | 2 |
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
