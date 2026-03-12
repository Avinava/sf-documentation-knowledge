---
title: "ServiceContract"
domain: sfFieldRef
topic: servicecontract
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:13.414Z
estimatedTokens: 930
keywords: [ServiceContract, customer, support, contract, business, agreement, API, version, 18.0, later]
---

# ServiceContract

> Represents a customer support contract
				(business agreement).
		This object is available in API version 18.0 and later.

# ServiceContract

Represents a customer support contract (business agreement). This object is available in API version 18.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ServiceContract](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_servicecontract.htm "HTML (New Window)") in the Field Service Developer Guide and Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| ActivationDate | Activation Date | datetime |  |  |  |  |
| AdditionalDiscount | Additional Discount | percent |  |  | 5 | 2 |
| ApprovalStatus | Approval Status | picklist |  | 40 |  |  |
| BillingAddress | Billing Address | address |  |  |  |  |
| BillingCity | Billing City | string |  | 40 |  |  |
| BillingCountry | Billing Country | string |  | 80 |  |  |
| BillingGeocodeAccuracy | Billing Geocode Accuracy | picklist |  | 40 |  |  |
| BillingLatitude | Billing Latitude | double |  |  | 18 | 15 |
| BillingLongitude | Billing Longitude | double |  |  | 18 | 15 |
| BillingPostalCode | Billing Zip | string |  | 20 |  |  |
| BillingState | Billing State | string |  | 80 |  |  |
| BillingStreet | Billing Street | textarea |  | 255 |  |  |
| ContactId | Contact ID | reference |  | 18 |  |  |
| ContractNumber | Contract Number | string |  | 30 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | textarea |  | 32000 |  |  |
| Discount | Discount | percent |  |  | 5 | 2 |
| EndDate | End Date | date |  |  |  |  |
| GrandTotal | Grand Total | currency |  |  | 18 | 2 |
| Id | Service Contract ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LineItemCount | Line Items | int | 9 |  |  |  |
| Name | Contract Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| ParentServiceContractId | Parent Service Contract ID | reference |  | 18 |  |  |
| Pricebook2Id | Price Book ID | reference |  | 18 |  |  |
| RootServiceContractId | Root Service Contract ID | reference |  | 18 |  |  |
| ShippingAddress | Shipping Address | address |  |  |  |  |
| ShippingCity | Shipping City | string |  | 40 |  |  |
| ShippingCountry | Shipping Country | string |  | 80 |  |  |
| ShippingGeocodeAccuracy | Shipping Geocode Accuracy | picklist |  | 40 |  |  |
| ShippingHandling | Shipping and Handling | currency |  |  | 18 | 2 |
| ShippingLatitude | Shipping Latitude | double |  |  | 18 | 15 |
| ShippingLongitude | Shipping Longitude | double |  |  | 18 | 15 |
| ShippingPostalCode | Shipping Zip | string |  | 20 |  |  |
| ShippingState | Shipping State | string |  | 80 |  |  |
| ShippingStreet | Shipping Street | textarea |  | 255 |  |  |
| SpecialTerms | Special Terms | textarea |  | 32000 |  |  |
| StartDate | Start Date | date |  |  |  |  |
| Status | Status | picklist |  | 255 |  |  |
| Subtotal | Subtotal | currency |  |  | 18 | 2 |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Tax | Tax | currency |  |  | 18 | 2 |
| Term | Term (months) | int | 9 |  |  |  |
| TotalPrice | Total Price | currency |  |  | 18 | 2 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
