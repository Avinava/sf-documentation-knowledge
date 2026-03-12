---
title: "PartyRelationshipGroup"
domain: sfFieldRef
topic: partyrelationshipgroup
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:07.001Z
estimatedTokens: 588
keywords: [PartyRelationshipGroup, group, people, living, together, household, affiliated, API, version, 56.0, later]
---

# PartyRelationshipGroup

> Represents a group of people living together such as a household, or
         a group of people affiliated with each other. This object is available in API version
      56.0 and later.

# PartyRelationshipGroup

Represents a group of people living together such as a household, or a group of people affiliated with each other. This object is available in API version 56.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see PartyRelationshipGroup in the Automotive Cloud Developer Guide, Industries Common Resources Developer Guide, and Nonprofit Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AccountId | Account ID | reference |  | 18 |  |  |
| Category | Category | picklist |  | 40 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| Description | Description | textarea |  | 255 |  |  |
| EndDate | End Date | date |  |  |  |  |
| GroupIncome | Group Income | currency |  |  | 18 | 0 |
| GroupSize | Group Size | int | 9 |  |  |  |
| Id | Party Relationship Group ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| PrimaryAddress | Primary Address | address |  |  |  |  |
| PrimaryCity | Primary Address City | string |  | 40 |  |  |
| PrimaryCountry | Primary Address Country | string |  | 80 |  |  |
| PrimaryGeocodeAccuracy | Primary Address Geocode Accuracy | picklist |  | 40 |  |  |
| PrimaryLatitude | Primary Address Latitude | double |  |  | 18 | 15 |
| PrimaryLongitude | Primary Address Longitude | double |  |  | 18 | 15 |
| PrimaryPostalCode | Primary Address Postal Code | string |  | 20 |  |  |
| PrimaryState | Primary Address State | string |  | 80 |  |  |
| PrimaryStreet | Primary Address Street | textarea |  | 255 |  |  |
| StartDate | Start Date | date |  |  |  |  |
| Status | Status | picklist |  | 255 |  |  |
| Subtype | Subtype | picklist |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Type | Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
