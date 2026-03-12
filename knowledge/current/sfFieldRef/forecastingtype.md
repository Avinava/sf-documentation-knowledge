---
title: "ForecastingType"
domain: sfFieldRef
topic: forecastingtype
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:58.608Z
estimatedTokens: 539
keywords: [ForecastingType, identify, forecast, associated, ForecastingAdjustment, ForecastingOwnerAdjustment, ForecastingQuota, ForecastingFact, ForecastingItem, objects, API, version, 30.0, greater]
---

# ForecastingType

> Used to identify the forecast type associated with ForecastingAdjustment, ForecastingOwnerAdjustment,
				ForecastingQuota, ForecastingFact, and ForecastingItem objects. Available in API version 30.0 and
		greater.

# ForecastingType

Used to identify the forecast type associated with ForecastingAdjustment, ForecastingOwnerAdjustment, ForecastingQuota, ForecastingFact, and ForecastingItem objects. Available in API version 30.0 and greater.

This guide only lists certain information for each object. For more information, including descriptions of the fields, see [ForecastingType](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_forecastingtype.htm "HTML (New Window)") in the Object Reference for the Salesforce Platform.

## Fields

| Field Name | Field Label | Type | Digits | Length | Precision | Scale |
| --- | --- | --- | --- | --- | --- | --- |
| CanDisplayQuotas | Can Display Quotas | boolean |  |  |  |  |
| CreatedById | Created By ID | reference |  | 18 |  |  |
| CreatedDate | Created Date | datetime |  |  |  |  |
| DateType | Date Type | picklist |  | 255 |  |  |
| DeveloperName | API Name | string |  | 80 |  |  |
| ForecastingGroupId | Forecasting Group ID | reference |  | 18 |  |  |
| HasAdjustments | Has Adjustments | boolean |  |  |  |  |
| HasOwnerAdjustments | Has Owner Adjustments | boolean |  |  |  |  |
| HasProductFamily | Has Product Family | boolean |  |  |  |  |
| Id | Forecasting Type ID | id |  | 18 |  |  |
| IsActive | Is Active | boolean |  |  |  |  |
| IsAdvCurrencyMgmt | Is Advanced Currency Management | boolean |  |  |  |  |
| IsAmount | Is Amount | boolean |  |  |  |  |
| IsCdp | Is Cdp | boolean |  |  |  |  |
| IsDeleted | Deleted | boolean |  |  |  |  |
| IsPlatformType | Is Platform Type | boolean |  |  |  |  |
| IsQuantity | Is Quantity | boolean |  |  |  |  |
| Language | Master Language | picklist |  | 40 |  |  |
| LastActivatedDate | Last Activated Date | datetime |  |  |  |  |
| LastModifiedById | Last Modified By ID | reference |  | 18 |  |  |
| LastModifiedDate | Last Modified Date | datetime |  |  |  |  |
| MasterLabel | Label | string |  | 80 |  |  |
| RoleType | Role Type | picklist |  | 255 |  |  |
| SystemModstamp | System Modstamp | datetime |  |  |  |  |
| Territory2ModelId | Territory Model ID | reference |  | 18 |  |  |

## Related Topics

- Field Name (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Field Label (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Type (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Digits (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Length (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Precision (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
- Scale (atlas.en-us.sfFieldRef.meta/sfFieldRef/salesforce_field_reference.htm)
