---
title: "ForecastingOwnerAdjustment"
domain: sfFieldRef
topic: forecastingowneradjustment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:58.552Z
estimatedTokens: 582
keywords: [ForecastingOwnerAdjustment, individual, forecast, user’s, adjustment, their, own, including, territory, forecasts, they, via, ForecastingItem, API, versions]
---

# ForecastingOwnerAdjustment

> This object represents an individual forecast user’s adjustment of
			their own forecast, including territory forecasts they own, via a
			ForecastingItem. Available in API versions 33.0 and
			later. This object is different from the ForecastingAdjustment object, which
		represents managers’ adjustments of subordinates’ and child territories’
		forecasts.

# ForecastingOwnerAdjustment

This object represents an individual forecast user’s adjustment of their own forecast, including territory forecasts they own, via a ForecastingItem. Available in API versions 33.0 and later. This object is different from the ForecastingAdjustment object, which represents managers’ adjustments of *subordinates’* and child territories’ forecasts.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ForecastingOwnerAdjustment](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_forecastingowneradjustment.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| CurrencyIsoCode | Currency ISO Code | picklist |  | 3 |  |  |
| ForecastCategoryName | Forecast Category | picklist |  | 40 |  |  |
| ForecastOwnerId | User ID | reference |  | 18 |  |  |
| ForecastingGroupItemId | Forecasting Group Item ID | reference |  | 18 |  |  |
| ForecastingItemCategory | Forecasting Item Category | picklist |  | 40 |  |  |
| ForecastingItemId | Forecasting Item ID | reference |  | 18 |  |  |
| ForecastingTypeId | Forecasting Type ID | reference |  | 18 |  |  |
| Id | Forecasting Owner Adjustment ID | id |  | 18 |  |  |
| IsAmount | Is Amount | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsQuantity | Is Quantity | boolean |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| OwnerAdjustedAmount | Owner Adjusted Amount | currency |  |  | 18 | 0 |
| OwnerAdjustedQuantity | Owner Adjusted Quantity | double |  |  | 12 | 2 |
| OwnerAdjustmentNote | Owner Adjustment Note | textarea |  | 255 |  |  |
| PeriodId | Period ID | reference |  | 18 |  |  |
| ProductFamily | Product Family | picklist |  | 40 |  |  |
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
