---
title: "AdvAcctForecastFactAdj"
domain: sfFieldRef
topic: advacctforecastfactadj
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:46.580Z
estimatedTokens: 360
keywords: [AdvAcctForecastFactAdj, adjustments, made, advanced, account, forecast, fact, records, API, version, 53.0, later]
---

# AdvAcctForecastFactAdj

> Represents information about adjustments made to advanced account forecast
         fact records. This object is available in API version 53.0 and later.

# AdvAcctForecastFactAdj

Represents information about adjustments made to advanced account forecast fact records. This object is available in API version 53.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see AdvAcctForecastFactAdj in the Manufacturing Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AdjustedById | User ID | reference |  | 18 |  |  |
| AdvAcctForecastFactId | Advanced Account Forecast Fact ID | reference |  | 18 |  |  |
| Comment | Comment | textarea |  | 2000 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Id | Advanced Account Forecast Fact Adjustment ID | id |  | 18 |  |  |
| InitialValue | Initial Value | double |  |  | 18 | 6 |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Name | string |  | 255 |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UpdatedValue | Updated Value | double |  |  | 18 | 6 |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
