---
title: "EmssnReductionTarget"
domain: sfFieldRef
topic: emssnreductiontarget
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:57.105Z
estimatedTokens: 929
keywords: [EmssnReductionTarget, science-based, non-science-based, target, company, fulfill, emissions, reduction, commitment, company’s, goal, reduce, carbon, increase, renewable]
---

# EmssnReductionTarget

> Represents information about the science-based or non-science-based target set by a company to fulfill its emissions reduction commitment. This target indicates the company’s emissions reduction goal. A company’s emissions reduction goal could be to reduce carbon emissions or increase renewable energy for reaching a target metric tonnes of CO2e (tCO2e) within a specific timeframe.

# EmssnReductionTarget

Represents information about the science-based or non-science-based target set by a company to fulfill its emissions reduction commitment. This target indicates the company’s emissions reduction goal. A company’s emissions reduction goal could be to reduce carbon emissions or increase renewable energy for reaching a target metric tonnes of CO2e (tCO2e) within a specific timeframe.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see EmssnReductionTarget in the Net Zero Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AbsoluteContractionPercentage | Absolute Contraction Percentage | picklist |  | 255 |  |  |
| ActivityUnit | Activity Unit | picklist |  | 255 |  |  |
| AnnualEmissionsInventoryId | Annual Emissions Inventory ID | reference |  | 18 |  |  |
| BaseYear | Base Year | double |  |  | 4 | 0 |
| BaseYearActivity | Base Year Activity | double |  |  | 18 | 2 |
| BaseYearEmissionIntensity | Base Year Emissions Intensity | double |  |  | 13 | 3 |
| BaseYearEmissions | Base Year Emissions | double |  |  | 18 | 2 |
| BusinessLine | Business Line | string |  | 80 |  |  |
| BusinessRegion | Business Region | picklist |  | 40 |  |  |
| Category | Category | picklist |  | 255 |  |  |
| Country | Country | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CustomAbsoluteContractionPct | Custom Absolute Contraction Percentage | percent |  |  | 18 | 2 |
| CustomTargetSettingMethod | Custom Target Setting Method | string |  | 80 |  |  |
| CustomTargetType | Custom Target Type | string |  | 80 |  |  |
| Description | Description | string |  | 255 |  |  |
| EmissionsActivityId | Emissions Activity ID | reference |  | 18 |  |  |
| EmssnRdctnCommitmentId | Emissions Reduction Commitment ID | reference |  | 18 |  |  |
| Id | Emissions Reduction Target ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| LastReferencedDate | Last Referenced Date | datetime |  |  |  |  |
| LastViewedDate | Last Viewed Date | datetime |  |  |  |  |
| Level | Level | picklist |  | 255 |  |  |
| Name | Name | string |  | 255 |  |  |
| OtherTargetKpi | Other Target KPI | picklist |  | 40 |  |  |
| OtherTargetKpiChangePercentage | Other Target KPI Change Percentage | percent |  |  | 18 | 2 |
| OtherTargetKpiInBaseYear | Other Target KPI in Base Year | double |  |  | 18 | 2 |
| OtherTargetKpiInTargetYear | Other Target KPI in Target Year | double |  |  | 18 | 2 |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| TargetEmissionsCalculator | Target Emissions Calculator | picklist |  | 255 |  |  |
| TargetEmssnChangePercentage | Target Emissions Change Percentage | percent |  |  | 18 | 2 |
| TargetEmssnIntensityChangePct | Target Emissions Intensity Change Percentage | percent |  |  | 18 | 2 |
| TargetSettingMethod | Target Setting Method | picklist |  | 255 |  |  |
| TargetType | Target Type | picklist |  | 255 |  |  |
| TargetYear | Target Year | picklist |  | 255 |  |  |
| TargetYearActivity | Target Year Activity | double |  |  | 18 | 2 |
| TargetYearEmissions | Target Year Emissions | double |  |  | 18 | 2 |
| TargetYearEmissionsIntensity | Target Year Emissions Intensity | double |  |  | 13 | 3 |
| TargetYearOutputCalcType | Target Year Output Calculation Type | picklist |  | 255 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
