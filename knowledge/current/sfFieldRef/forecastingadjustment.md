---
title: "ForecastingAdjustment"
domain: sfFieldRef
topic: forecastingadjustment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:58.473Z
estimatedTokens: 559
keywords: [ForecastingAdjustment, individual, forecast, manager’s, adjustment, subordinate’s, child, territory’s, via, ForecastingItem, API, versions, 26.0, later, different]
---

# ForecastingAdjustment

> This object represents an individual forecast manager’s
   adjustment for a subordinate’s or child territory’s forecast via a ForecastingItem.
  Available in API versions 26.0 and later. This object is different from the
  ForecastingOwnerAdjustment object, which represents forecast users’ adjustments of their
   own forecasts, including territory forecasts they own.

# ForecastingAdjustment

This object represents an individual forecast manager’s adjustment for a subordinate’s or child territory’s forecast via a ForecastingItem. Available in API versions 26.0 and later. This object is different from the ForecastingOwnerAdjustment object, which represents forecast users’ adjustments of their *own* forecasts, including territory forecasts they own.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ForecastingAdjustment](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_forecastingadjustment.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AdjustedAmount | Adjusted Amount | currency |  |  | 18 | 0 |
| AdjustedQuantity | Adjusted Quantity | double |  |  | 12 | 2 |
| AdjustmentNote | Adjustment Note | textarea |  | 255 |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| ForecastCategoryName | Forecast Category | picklist |  | 255 |  |  |
| ForecastingGroupItemId | Forecasting Group Item ID | reference |  | 18 |  |  |
| ForecastingItemCategory | Forecasting Item Category | picklist |  | 255 |  |  |
| ForecastingItemId | Forecasting Item ID | reference |  | 18 |  |  |
| ForecastingTypeId | Forecasting Type ID | reference |  | 18 |  |  |
| Id | ForecastingAdjustment ID | id |  | 18 |  |  |
| IsAmount | Is Amount | boolean |  |  |  |  |
| IsQuantity | Is Quantity | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| PeriodId | Period ID | reference |  | 18 |  |  |
| ProductFamily | Product Family | picklist |  | 255 |  |  |
| StartDate | Period Start Date | date |  |  |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Territory2Id | Territory ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
