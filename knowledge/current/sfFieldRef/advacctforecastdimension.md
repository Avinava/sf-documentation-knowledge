---
title: "AdvAcctForecastDimension"
domain: sfFieldRef
topic: advacctforecastdimension
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:46.574Z
estimatedTokens: 291
keywords: [AdvAcctForecastDimension, dimensions, selected, advanced, account, forecast]
---

# AdvAcctForecastDimension

> Represents information about the dimensions selected for an advanced account
         forecast set.

# AdvAcctForecastDimension

Represents information about the dimensions selected for an advanced account forecast set.

For more information, see AdvAcctForecastDimension in the Manufacturing Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AdvAcctForecastDimName | Name | string |  | 80 |  |  |
| AdvAcctForecastDimSourceId | Advanced Account Forecast Dimension Source ID | reference |  | 18 |  |  |
| AdvAcctForecastSetId | Advanced Account Forecast Set ID | reference |  | 18 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DimensionFieldName | Custom Field Definition ID | picklist |  | 255 |  |  |
| HierarchySequenceNumber | Hierarchy Sequence Number | int | 9 |  |  |  |
| Id | Advanced Account Forecast Dimension ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
