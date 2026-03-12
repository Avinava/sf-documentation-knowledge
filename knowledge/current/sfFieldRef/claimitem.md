---
title: "ClaimItem"
domain: sfFieldRef
topic: claimitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:53.054Z
estimatedTokens: 569
keywords: [ClaimItem, claim, items, collision, damage, roadside, assistance, rental, care, their, coverage]
---

# ClaimItem

> Represents claim items (such as collision damage, roadside assistance, rental
         care) and their coverage details.

# ClaimItem

Represents claim items (such as collision damage, roadside assistance, rental care) and their coverage details.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see ClaimItem in the Automotive Cloud Developer Guide, Financial Services Cloud Developer Guide, Manufacturing Cloud Developer Guide, and Public Sector Solutions Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Category | Category | picklist |  | 40 |  |  |
| ClaimId | Claim ID | reference |  | 18 |  |  |
| ClaimInstanceIdentifier | Claim Instance Identifier | string |  | 255 |  |  |
| ClaimParticipantId | Claim Participant ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| CurrentAddress | Current Address | address |  |  |  |  |
| CurrentCity | Current City | string |  | 40 |  |  |
| CurrentCountry | Current Country | string |  | 80 |  |  |
| CurrentGeocodeAccuracy | Current Geocode Accuracy | picklist |  | 40 |  |  |
| CurrentLatitude | Current Latitude | double |  |  | 18 | 15 |
| CurrentLongitude | Current Longitude | double |  |  | 18 | 15 |
| CurrentPostalCode | Current Postal Code | string |  | 20 |  |  |
| CurrentState | Current State | string |  | 80 |  |  |
| CurrentStreet | Current Street | textarea |  | 255 |  |  |
| Description | Description | textarea |  | 32000 |  |  |
| Id | Claim Item ID | id |  | 18 |  |  |
| InsurancePolicyAssetId | Insurance Policy Asset ID | reference |  | 18 |  |  |
| InsurancePolicyCoverageId | Insurance Policy Coverage ID | reference |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| ProductId | Product ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
