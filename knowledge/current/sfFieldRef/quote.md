---
title: "Quote"
domain: sfFieldRef
topic: quote
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:11.064Z
estimatedTokens: 1233
keywords: [Quote, record, showing, proposed, prices, products, services, API, version, 18.0, later]
---

# Quote

> Represents a quote, which is a record showing proposed prices for
			products and services. Available in API version 18.0 and later.

# Quote

Represents a quote, which is a record showing proposed prices for products and services. Available in API version 18.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [Quote](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_quote.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| AdditionalAddress | Additional To | address |  |  |  |  |
| AdditionalCity | Additional To City | string |  | 40 |  |  |
| AdditionalCountry | Additional To Country | string |  | 80 |  |  |
| AdditionalGeocodeAccuracy | Additional To Geocode Accuracy | picklist |  | 40 |  |  |
| AdditionalLatitude | Additional To Latitude | double |  |  | 18 | 15 |
| AdditionalLongitude | Additional To Longitude | double |  |  | 18 | 15 |
| AdditionalName | Additional To Name | string |  | 255 |  |  |
| AdditionalPostalCode | Additional To Zip/Postal Code | string |  | 20 |  |  |
| AdditionalState | Additional To State/Province | string |  | 80 |  |  |
| AdditionalStreet | Additional To Street | textarea |  | 255 |  |  |
| BillingAddress | Bill To | address |  |  |  |  |
| BillingCity | Bill To City | string |  | 40 |  |  |
| BillingCountry | Bill To Country | string |  | 80 |  |  |
| BillingGeocodeAccuracy | Bill To Geocode Accuracy | picklist |  | 40 |  |  |
| BillingLatitude | Bill To Latitude | double |  |  | 18 | 15 |
| BillingLongitude | Bill To Longitude | double |  |  | 18 | 15 |
| BillingName | Bill To Name | string |  | 255 |  |  |
| BillingPostalCode | Bill To Zip/Postal Code | string |  | 20 |  |  |
| BillingState | Bill To State/Province | string |  | 80 |  |  |
| BillingStreet | Bill To Street | textarea |  | 255 |  |  |
| CanCreateQuoteLineItems | Can Create Quote Line Items | boolean |  |  |  |  |
| ContactId | Contact ID | reference |  | 18 |  |  |
| ContractId | Contract ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Description | textarea |  | 32000 |  |  |
| Discount | Discount | percent |  |  | 5 | 2 |
| Email | Email | email |  | 80 |  |  |
| ExpirationDate | Expiration Date | date |  |  |  |  |
| Fax | Fax | phone |  | 40 |  |  |
| GrandTotal | Grand Total | currency |  |  | 18 | 2 |
| Id | Quote ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsSyncing | Syncing | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| LineItemCount | Line Items | int | 9 |  |  |  |
| Name | Quote Name | string |  | 255 |  |  |
| OpportunityId | Opportunity ID | reference |  | 18 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| Phone | Phone | phone |  | 40 |  |  |
| Pricebook2Id | Price Book ID | reference |  | 18 |  |  |
| QuoteNumber | Quote Number | string |  | 30 |  |  |
| QuoteToAddress | Quote To | address |  |  |  |  |
| QuoteToCity | Quote To City | string |  | 40 |  |  |
| QuoteToCountry | Quote To Country | string |  | 80 |  |  |
| QuoteToGeocodeAccuracy | Quote To Geocode Accuracy | picklist |  | 40 |  |  |
| QuoteToLatitude | Quote To Latitude | double |  |  | 18 | 15 |
| QuoteToLongitude | Quote To Longitude | double |  |  | 18 | 15 |
| QuoteToName | Quote To Name | string |  | 255 |  |  |
| QuoteToPostalCode | Quote To Zip/Postal Code | string |  | 20 |  |  |
| QuoteToState | Quote To State/Province | string |  | 80 |  |  |
| QuoteToStreet | Quote To Street | textarea |  | 255 |  |  |
| ShippingAddress | Ship To | address |  |  |  |  |
| ShippingCity | Ship To City | string |  | 40 |  |  |
| ShippingCountry | Ship To Country | string |  | 80 |  |  |
| ShippingGeocodeAccuracy | Ship To Geocode Accuracy | picklist |  | 40 |  |  |
| ShippingHandling | Shipping and Handling | currency |  |  | 18 | 2 |
| ShippingLatitude | Ship To Latitude | double |  |  | 18 | 15 |
| ShippingLongitude | Ship To Longitude | double |  |  | 18 | 15 |
| ShippingName | Ship To Name | string |  | 255 |  |  |
| ShippingPostalCode | Ship To Zip/Postal Code | string |  | 20 |  |  |
| ShippingState | Ship To State/Province | string |  | 80 |  |  |
| ShippingStreet | Ship To Street | textarea |  | 255 |  |  |
| Status | Status | picklist |  | 40 |  |  |
| Subtotal | Subtotal | currency |  |  | 18 | 2 |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Tax | Tax | currency |  |  | 18 | 2 |
| TotalPrice | Total Price | currency |  |  | 18 | 2 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
