---
title: "ForecastingCustomCategory"
domain: sfFieldRef
topic: forecastingcustomcategory
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:58.493Z
estimatedTokens: 512
keywords: [ForecastingCustomCategory, custom, forecasting, category, forecast, rollups, API, version, 62.0, later]
---

# ForecastingCustomCategory

> Represents a custom forecasting category used for forecast rollups. This
      object is available in API version 62.0 and later.

# ForecastingCustomCategory

Represents a custom forecasting category used for forecast rollups. This object is available in API version 62.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ForecastingCustomCategory](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_forecastingcustomcategory.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CanHaveQuotas | Can Have Quotas | boolean |  |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| Description | Forecasting Custom Category Description | textarea |  | 255 |  |  |
| DeveloperName | Name | string |  | 80 |  |  |
| DisplayPosition | Display Position | int | 9 |  |  |  |
| ForecastingSourceDefinitionId | Forecasting Source Definition ID | reference |  | 18 |  |  |
| ForecastingTypeId | Forecasting Type ID | reference |  | 18 |  |  |
| Id | Forecasting Custom Category ID | id |  | 18 |  |  |
| IsAdjustable | Is Adjustable | boolean |  |  |  |  |
| IsAmount | Is Amount | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsHidden | Is Hidden | boolean |  |  |  |  |
| IsOwnerAdjustable | Is Owner Adjustable | boolean |  |  |  |  |
| IsQuantity | Is Quantity | boolean |  |  |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MasterLabel | Custom Category column header label displayed in forecasting grid UI | string |  | 80 |  |  |
| MeasureFieldOverride | Custom Field Definition ID | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| UnitOfMeasure | Unit Of Measure | string |  | 40 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
