---
title: "AnnualEmssnRdctnTarget"
domain: sfFieldRef
topic: annualemssnrdctntarget
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:47.121Z
estimatedTokens: 487
keywords: [AnnualEmssnRdctnTarget, emissions, reduction, target, company, particular, year]
---

# AnnualEmssnRdctnTarget

> Represents information about the emissions reduction target set by a company for a particular year.

# AnnualEmssnRdctnTarget

Represents information about the emissions reduction target set by a company for a particular year.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see AnnualEmssnRdctnTarget in the Net Zero Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| EmissionsReductionPercentage | Emissions Reduction Percentage | percent |  |  | 18 | 2 |
| EmssnIntensityReductionPct | Emissions Intensity Reduction Percentage | percent |  |  | 18 | 2 |
| Id | Annual Emissions Reduction Target ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Name | Annual Emissions Reduction Target Name | string |  | 255 |  |  |
| OtherTargetKpiChangePercentage | Other Target KPI Change Percentage | percent |  |  | 18 | 2 |
| OtherTargetKpiInTargetYear | Other Target KPI in Target Year | double |  |  | 18 | 2 |
| ParentTargetId | Emissions Reduction Target ID | reference |  | 18 |  |  |
| Scope3GhgCatgTgtEmssnRdctn | Scope 3 GHG Category Target Emissions Reduction | double |  |  | 18 | 2 |
| Scope3GhgCatgTgtEmssnRdctnPct | Scope 3 GHG Category Target Emissions Reduction Percentage | percent |  |  | 18 | 2 |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TargetEmissions | Target Emissions (tC02e) | double |  |  | 18 | 2 |
| TargetEmissionsIntensity | Target Emissions Intensity | double |  |  | 13 | 3 |
| TargetYear | Target Year | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
