---
title: "ForecastingItem"
domain: sfFieldRef
topic: forecastingitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:58.544Z
estimatedTokens: 738
keywords: [ForecastingItem, read-only, individual, forecast, amounts, Users, their, perspectives, roles, include, forecasting, revenue, AmountWithoutAdjustments, AmountWithoutManagerAdjustment, ForecastAmount]
---

# ForecastingItem

> This object is read-only used for individual forecast amounts. Users
   see amounts based on their perspectives and forecast roles. The amounts users see include
  one of these values when forecasting in revenue: AmountWithoutAdjustments,
   AmountWithoutManagerAdjustment, ForecastAmount,
   OwnerOnlyAmount. The amounts users see include one of these values when
  forecasting in quantity: QuantityWithoutAdjustments,
   QuantityWithoutManagerAdjustment, ForecastQuantity,
   OwnerOnlyQuantity. Available in API version 26.0 and later.

# ForecastingItem

This object is read-only used for individual forecast amounts. Users see amounts based on their perspectives and forecast roles. The amounts users see include one of these values when forecasting in revenue: AmountWithoutAdjustments, AmountWithoutManagerAdjustment, ForecastAmount, OwnerOnlyAmount. The amounts users see include one of these values when forecasting in quantity: QuantityWithoutAdjustments, QuantityWithoutManagerAdjustment, ForecastQuantity, OwnerOnlyQuantity. Available in API version 26.0 and later.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ForecastingItem](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_forecastingitem.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| AmountWithoutAdjustments | Amount Without Adjustments | currency |  |  | 18 | 0 |
| AmountWithoutManagerAdjustment | Amount Without Manager Adjustment | currency |  |  | 18 | 0 |
| AmountWithoutOwnerAdjustment | Amount Without Owner Adjustments | currency |  |  | 18 | 0 |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| ForecastAmount | Forecast Amount | currency |  |  | 18 | 0 |
| ForecastCategoryName | Forecast Category | picklist |  | 255 |  |  |
| ForecastQuantity | Forecast Quantity | double |  |  | 12 | 2 |
| ForecastingGroupItemId | Forecasting Group Item ID | reference |  | 18 |  |  |
| ForecastingItemCategory | Forecasting Item Category | picklist |  | 255 |  |  |
| ForecastingTypeId | Forecasting Type ID | reference |  | 18 |  |  |
| HasAdjustment | Has Adjustment | boolean |  |  |  |  |
| HasOwnerAdjustment | Has Owner Adjustment | boolean |  |  |  |  |
| Id | Forecasting Item ID | id |  | 18 |  |  |
| IsAmount | Is Amount | boolean |  |  |  |  |
| IsQuantity | Is Quantity | boolean |  |  |  |  |
| IsUpToDate | Is up to date | boolean |  |  |  |  |
| OwnerId | Owner ID | reference |  | 18 |  |  |
| OwnerOnlyAmount | Owner Only Amount | currency |  |  | 18 | 0 |
| OwnerOnlyQuantity | Owner Only Quantity | double |  |  | 12 | 2 |
| ParentForecastingItemId | Forecasting Item ID | reference |  | 18 |  |  |
| PeriodId | Period ID | reference |  | 18 |  |  |
| ProductFamily | Product Family | picklist |  | 255 |  |  |
| QuantityWithoutAdjustments | Quantity Without Adjustments | double |  |  | 12 | 2 |
| QuantityWithoutManagerAdjustment | Quantity Without Manager Adjustment | double |  |  | 12 | 2 |
| QuantityWithoutOwnerAdjustment | Quantity Without Owner Adjustment | double |  |  | 12 | 2 |
| SubordinateOverrides | Subordinate Overrides | int | 9 |  |  |  |
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
