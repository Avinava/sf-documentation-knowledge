---
title: "Order"
domain: sfFieldRef
topic: order
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:05.596Z
estimatedTokens: 984
keywords: [Order, associated, contract, account]
---

# Order

> Represents an order associated with a contract or an
		account.

# Order

Represents an order associated with a contract or an account.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [Order](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_order.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| ActivatedById | Activated By ID | reference |  | 18 |  |  |
| ActivatedDate | Activated Date | datetime |  |  |  |  |
| BillToContactId | Bill To Contact ID | reference |  | 18 |  |  |
| BillingAddress | Billing Address | address |  |  |  |  |
| BillingCity | Billing City | string |  | 40 |  |  |
| BillingCountry | Billing Country | string |  | 80 |  |  |
| BillingGeocodeAccuracy | Billing Geocode Accuracy | picklist |  | 40 |  |  |
| BillingLatitude | Billing Latitude | double |  |  | 18 | 15 |
| BillingLongitude | Billing Longitude | double |  |  | 18 | 15 |
| BillingPostalCode | Billing Zip/Postal Code | string |  | 20 |  |  |
| BillingState | Billing State/Province | string |  | 80 |  |  |
| BillingStreet | Billing Street | textarea |  | 255 |  |  |
| CompanyAuthorizedById | Company Authorized By ID | reference |  | 18 |  |  |
| CompanyAuthorizedDate | Company Authorized Date | date |  |  |  |  |
| ContractId | Contract ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| CustomerAuthorizedById | Customer Authorized By ID | reference |  | 18 |  |  |
| CustomerAuthorizedDate | Customer Authorized Date | date |  |  |  |  |
| Description | Description | textarea |  | 32000 |  |  |
| EffectiveDate | Order Start Date | date |  |  |  |  |
| EndDate | Order End Date | date |  |  |  |  |
| Id | Order ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsReductionOrder | Reduction Order | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Order Name | string |  | 80 |  |  |
| OrderNumber | Order Number | string |  | 30 |  |  |
| OrderReferenceNumber | Order Reference Number | string |  | 80 |  |  |
| OriginalOrderId | Order ID | reference |  | 18 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PoDate | PO Date | date |  |  |  |  |
| PoNumber | PO Number | string |  | 80 |  |  |
| Pricebook2Id | Price Book ID | reference |  | 18 |  |  |
| RelatedOrderId | Order ID | reference |  | 18 |  |  |
| RelatedOrderType | Related Order Type | picklist |  | 40 |  |  |
| ShipToContactId | Ship To Contact ID | reference |  | 18 |  |  |
| ShippingAddress | Shipping Address | address |  |  |  |  |
| ShippingCity | Shipping City | string |  | 40 |  |  |
| ShippingCountry | Shipping Country | string |  | 80 |  |  |
| ShippingGeocodeAccuracy | Shipping Geocode Accuracy | picklist |  | 40 |  |  |
| ShippingLatitude | Shipping Latitude | double |  |  | 18 | 15 |
| ShippingLongitude | Shipping Longitude | double |  |  | 18 | 15 |
| ShippingPostalCode | Shipping Zip/Postal Code | string |  | 20 |  |  |
| ShippingState | Shipping State/Province | string |  | 80 |  |  |
| ShippingStreet | Shipping Street | textarea |  | 255 |  |  |
| Status | Status | picklist |  | 100 |  |  |
| StatusCode | Status Category | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TotalAmount | Order Amount | currency |  |  | 18 | 2 |
| Type | Order Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
