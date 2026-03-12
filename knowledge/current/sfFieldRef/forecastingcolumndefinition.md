---
title: "ForecastingColumnDefinition"
domain: sfFieldRef
topic: forecastingcolumndefinition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:58.480Z
estimatedTokens: 402
keywords: [ForecastingColumnDefinition, custom, calculated, column, data, forecast, API, version, 56.0, later]
---

# ForecastingColumnDefinition

> Represents a custom calculated column or a custom reference data
         column in a forecast type. This object is available in API version 56.0 and
      later.

# ForecastingColumnDefinition

Represents a custom calculated column or a custom reference data column in a forecast type. This object is available in API version 56.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ForecastingColumnDefinition](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_forecastingcolumndefinition.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DeveloperName | Name | string |  | 80 |  |  |
| ForecastingTypeId | Forecasting Type ID | reference |  | 18 |  |  |
| Formula | Formula for calculated column | string |  | 255 |  |  |
| Id | Forecasting Column Definition ID | id |  | 18 |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MasterLabel | Calculated column header label displayed in forecasting grid UI | string |  | 80 |  |  |
| ReferenceField | Custom Field Definition ID | picklist |  | 255 |  |  |
| ResultField | Field containing the value of the formula result | string |  | 40 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
