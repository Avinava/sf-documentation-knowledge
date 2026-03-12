---
title: "AdvAcctForecastMeasureDef"
domain: sfFieldRef
topic: advacctforecastmeasuredef
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:46.590Z
estimatedTokens: 345
keywords: [AdvAcctForecastMeasureDef, measures, advanced, account, forecasts, grid, forecast]
---

# AdvAcctForecastMeasureDef

> Represents information about the measures to be displayed in the advanced
         account forecasts grid for the forecast set.

# AdvAcctForecastMeasureDef

Represents information about the measures to be displayed in the advanced account forecasts grid for the forecast set.

For more information, see AdvAcctForecastMeasureDef in the Manufacturing Cloud Developer Guide.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AdvAccountForecastSetId | Advanced Account Forecast Set ID | reference |  | 18 |  |  |
| AdvAcctForecastMeasureDefName | Name | string |  | 80 |  |  |
| AggregationType | Aggregation Type | picklist |  | 255 |  |  |
| ComputationMethod | Computation Method | picklist |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| ForecastDataMeasureName | Forecast Data Measure Name | string |  | 80 |  |  |
| ForecastMeasureName | Forecast Measure Name | string |  | 80 |  |  |
| ForecastMeasureType | Forecast Measure Type | picklist |  | 255 |  |  |
| Id | Advanced Account Forecast Measure Definition ID | id |  | 18 |  |  |
| IsAdjustmentTracked | Track Adjustments | boolean |  |  |  |  |
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
