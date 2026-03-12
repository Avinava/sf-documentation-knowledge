---
title: "Contract"
domain: sfFieldRef
topic: contract
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:54.293Z
estimatedTokens: 947
keywords: [Contract, business, agreement, associated, Account]
---

# Contract

> Represents a contract (a business agreement) associated with an
			Account.

# Contract

Represents a contract (a business agreement) associated with an Account.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [Contract](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_contract.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| ActivatedById | Activated By ID | reference |  | 18 |  |  |
| ActivatedDate | Activated Date | datetime |  |  |  |  |
| ActivityMetricId | Activity Metric ID | reference |  | 18 |  |  |
| ActivityMetricRollupId | Activity Metric Rollup ID | reference |  | 18 |  |  |
| BillingAddress | Billing Address | address |  |  |  |  |
| BillingCity | Billing City | string |  | 40 |  |  |
| BillingCountry | Billing Country | string |  | 80 |  |  |
| BillingGeocodeAccuracy | Billing Geocode Accuracy | picklist |  | 40 |  |  |
| BillingLatitude | Billing Latitude | double |  |  | 18 | 15 |
| BillingLongitude | Billing Longitude | double |  |  | 18 | 15 |
| BillingPostalCode | Billing Zip/Postal Code | string |  | 20 |  |  |
| BillingState | Billing State/Province | string |  | 80 |  |  |
| BillingStreet | Billing Street | textarea |  | 255 |  |  |
| CompanySignedDate | Company Signed Date | date |  |  |  |  |
| CompanySignedId | Company Signed By ID | reference |  | 18 |  |  |
| ContractNumber | Contract Number | string |  | 30 |  |  |
| ContractTerm | Contract Term | int | 4 |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| CustomerSignedDate | Customer Signed Date | date |  |  |  |  |
| CustomerSignedId | Customer Signed By ID | reference |  | 18 |  |  |
| CustomerSignedTitle | Customer Signed Title | string |  | 40 |  |  |
| Description | Description | textarea |  | 32000 |  |  |
| EndDate | Contract End Date | date |  |  |  |  |
| Id | Contract ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastActivityDate | Last Activity | date |  |  |  |  |
| LastApprovedDate | Last Approved Date | datetime |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| OwnerExpirationNotice | Owner Expiration Notice | picklist |  | 40 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| Pricebook2Id | Price Book ID | reference |  | 18 |  |  |
| ShippingAddress | Shipping Address | address |  |  |  |  |
| ShippingCity | Shipping City | string |  | 40 |  |  |
| ShippingCountry | Shipping Country | string |  | 80 |  |  |
| ShippingGeocodeAccuracy | Shipping Geocode Accuracy | picklist |  | 40 |  |  |
| ShippingLatitude | Shipping Latitude | double |  |  | 18 | 15 |
| ShippingLongitude | Shipping Longitude | double |  |  | 18 | 15 |
| ShippingPostalCode | Shipping Zip/Postal Code | string |  | 20 |  |  |
| ShippingState | Shipping State/Province | string |  | 80 |  |  |
| ShippingStreet | Shipping Street | textarea |  | 255 |  |  |
| SourceOpportunityId | Opportunity ID | reference |  | 18 |  |  |
| SpecialTerms | Special Terms | textarea |  | 4000 |  |  |
| StartDate | Contract Start Date | date |  |  |  |  |
| Status | Status | picklist |  | 100 |  |  |
| StatusCode | Status Category | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
