---
title: "BldgSizeCategory"
domain: sfFieldRef
topic: bldgsizecategory
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:50.178Z
estimatedTokens: 384
keywords: [BldgSizeCategory, building, size, filter, criteria, energy, intensity, records, stored, range, floor, area, sizes, minimum, maximum]
---

# BldgSizeCategory

> Represents the building size filter criteria for the building energy
         intensity records. The building size filter criteria are stored as a range of floor area
         sizes from a minimum size to a maximum size, in units of sqft or m². The records can have
         overlapping minimum-maximum ranges.

# BldgSizeCategory

Represents the building size filter criteria for the building energy intensity records. The building size filter criteria are stored as a range of floor area sizes from a minimum size to a maximum size, in units of sqft or m². The records can have overlapping minimum-maximum ranges.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see BldgSizeCategory in the Net Zero Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Building Size Category ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| MaximumSize | Maximum Size | double |  |  | 18 | 0 |
| MaximumSizeInSqft | Maximum Size (sqft) | double |  |  | 18 | 0 |
| MinimumSize | Minimum Size | double |  |  | 18 | 0 |
| MinimumSizeInSqft | Minimum Size (sqft) | double |  |  | 18 | 0 |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| SizeUnit | Size Unit | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
