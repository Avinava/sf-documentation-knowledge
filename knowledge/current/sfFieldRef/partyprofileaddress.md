---
title: "PartyProfileAddress"
domain: sfFieldRef
topic: partyprofileaddress
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:06.955Z
estimatedTokens: 486
keywords: [PartyProfileAddress, address, party, API, version, 62.0, later]
---

# PartyProfileAddress

> Represents information about the address of the party. This
      object is available in API version 62.0 and later.

# PartyProfileAddress

Represents information about the address of the party. This object is available in API version 62.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see PartyProfileAddress in the Financial Services Cloud Developer Guide and Public Sector Solutions Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| Address | Address | address |  |  |  |  |
| AddressType | Address Type | picklist |  | 40 |  |  |
| City | City | string |  | 40 |  |  |
| Country | Country | string |  | 80 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| GeocodeAccuracy | Geocode Accuracy | picklist |  | 40 |  |  |
| Id | Party Profile Address ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsPrimaryAddress | Primary Address | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Latitude | Latitude | double |  |  | 18 | 15 |
| Longitude | Longitude | double |  |  | 18 | 15 |
| Name | Party Profile Address Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PartyProfileId | Party Profile ID | reference |  | 18 |  |  |
| PostalCode | Postal Code | string |  | 20 |  |  |
| State | State | string |  | 80 |  |  |
| Street | Street | textarea |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| ValidityEndDate | Validity End Date | date |  |  |  |  |
| ValidityStartDate | Validity Start Date | date |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
